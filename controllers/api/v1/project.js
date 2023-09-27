const Project = require('../../../models/project');

        module.exports.project = async function(req, res){
          let id = req.params.id;
          console.log(id);
            let projects = await Project.find({})
           .populate('issues')

                return res.json(200, {
                    message: "List of projects",
                    projects: projects
                })
        }