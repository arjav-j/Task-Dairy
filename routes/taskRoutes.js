const express = require("express");
const taskCon = require('../controllers/taskCon');
const Router = express.Router();

// router.<method>("<rel path>", taskCon.<con name>);
Router.get('/create', taskCon.newTask);
Router.get('/search', taskCon.searchTask);
Router.post('/search', taskCon.searchTask);
Router.get('/:id', taskCon.taskDetails);
Router.get('/', taskCon.taskIndex);
Router.get('/edit/:id', taskCon.editTask);
Router.post('/:id', taskCon.updateTask);
Router.post('/', taskCon.createTask);
Router.delete('/:id', taskCon.deleteTask);

module.exports = Router;