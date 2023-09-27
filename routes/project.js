const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const issueController = require('../controllers/issueController');

// route for redirecrting create project page
router.post('/create_project_page', projectController.createProjectPage);

//route for creating new project
console.log('hello in projects routes');
router.post('/create_project', projectController.createNewProject);

//route for creating new issue
router.post('/create_issue', issueController.createIssue);

//route for redirecting to project details page
router.get('/projects_details/:id', projectController.project_details);

//route for redirecting create issue page
router.get('/create_issue_page/:id', issueController.issuePage);

// route for deleting project
router.get('/delete_project/:id', projectController.deleteProject);

// route for deleting project
//router.get('/delete_issue/:id', issueController.deleteIssue);
module.exports = router;