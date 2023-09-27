const Issue = require('../models/issue');
const Project = require('../models/project');

//module for redirecting create issue page

module.exports.issuePage = function(req, res){
    let id = req.params.id;
    Project.findById(id).populate('issues').exec()
    .then(function(project){
        return res.render('create_issues',{
            title: "Add Issue",
            project: project
        });
    })
    .catch(function(err){

    });

}

    // finding the project by id  and storing its issues in db
module.exports.createIssue = function(req, res){
    let id =  req.body.projectID;
    Project.findById(id)
    .then(function(project){
        if(project){
            Issue.create({  //create issue
                issueName: req.body.issueName,
                issueDescription: req.body.issueDescription,
                lable: req.body.lable.substr(1).split("^"), // storing lables in the form of array
                issueAuthor: req.body.issueAuthor,
                projectID:req.body.projectID
            })
            .then(function(issue){
                project.issues.push(issue); //pushing issue in project schema
                project.save();
            })
            .catch(function(err){
                
            })
        }
    })
    .catch(function(err){

    })

    return res.redirect(`/project/projects_details/${id}`); // redirecting to project details page
}

// controller for deleting an issue...
module.exports.deleteIssue = function(req, res){
    //console.log('issue',req.params.id);
    let issue = JSON.parse(req.params.id.substr());
    console.log(typeof(issue));  
    //console.log(id);
    let project_id = req.params.projectID;
    //console.log(project_id);
    Project.findById(project_id)
    .then(function(project){
        let newissues = project.issues.filter(function(issue){
            issue._id != id;
        })
        project.issues = newissues;
    })
    .catch(function(err)
    {});
    return res.redirect('back');
    // Issue.deleteOne({_id: req.params.id})
    // .then(function(project){
    //      console.log("projectID", project_id);
    //     return res.redirect('back');
    // })
}