const Project = require('../models/project');
const Issue = require('../models/issue');


//for creating new project
module.exports.createNewProject = function(req, res){ 
    Project.create(req.body)
    .then(function(project){
        return res.redirect('/')
    })
    .catch(function(err){
        console.log("error in creating project", err); 
        return;
    });
};



//controller for rendering create project page
module.exports.createProjectPage = function(req, res){
    res.render('create_project',{
        title:"create-project"
    })
}
 
// controller for deleting a project...
module.exports.deleteProject = function(req, res){
    let id = req.params.id;
   
    Project.deleteOne({_id: req.params.id})
    .then(function(project){
        // console.log("project", project);
        return res.redirect('/')
    })
}

//controller for rendering project details page
module.exports.project_details = function(req, res){
    let id = req.params.id;
    Project.findById(id).populate('issues').exec() //populating issues so we can use them
    .then(function(project){
        return res.render('project_details',{
            title: "Project Details",
            project: project
        });
    })
    .catch(function(err){

    })
}