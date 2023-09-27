const Projects = require('../models/project');

module.exports.home = function(req, res){
    console.log('hello');
    Projects.find({})
    .then(
        function(projects){
            return res.render('home',{
                title: "Home",
                projects: projects
            });
        })    
    .catch(function(err){

    });
}