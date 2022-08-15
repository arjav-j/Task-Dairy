const Task = require("../models/tasks");

const taskIndex = (req, res) => {
    Task.find().sort({ createdAt: -1 })
     .then(result => {
        res.render('index', { tasks: result, title: 'Tasks' });
      })
     .catch(err => {console.log(err);})
    ;
};
/***************************************************************************************************/
const searchTask = (req, res) => {
    // console.log(req.body.taskTitle ,req.body.taskStatus, req.body.taskDate)
    switch(parseInt(req.body.srch)){
    case 1:
        Task.find({taskTitle: req.body.taskTitle})
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;

    case 2:
        Task.find({taskStatus: req.body.taskStatus})
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;

    case 3:
        Task.find({taskDate: req.body.taskDate})
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;


    case 4:
        Task.find({taskTitle: req.body.taskTitle, taskStatus: req.body.taskStatus, taskDate: req.body.taskDate})
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;

    case 12:
        Task.find({taskTitle: req.body.taskTitle, taskStatus: req.body.taskStatus})
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;

    case 13:
        Task.find({taskTitle: req.body.taskTitle, taskDate: req.body.taskDate})
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;

    case 23:
        Task.find({taskStatus: req.body.taskStatus, taskDate: req.body.taskDate})
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;
    default:
        Task.find()
        .then(result => {res.render('search', { tasks: result, title: 'Tasks'});})
        .catch(err => {console.log(err);});
        break;
    }
};

const taskDetails = (req, res) => {
    const id = req.params.id;
    Task.findById(id)
     .then(result => {
        res.render('details', { task: result, title: 'Task Details' });
     })
     .catch(err => {
        console.log(err);
        res.render('404', { title: 'Invalid Task' });
      })
    ;
}
  
const newTask = (req, res) => {
    res.render('create', { title: 'New Task' });
}

const createTask = (req, res) => {
    const task = new Task(req.body);
    task.save()
    .then(result => {
        res.redirect('/tasks');
    })
    .catch(err => { console.log(err); })
    ;
}

const editTask = (req, res) => {
    const id = req.params.id;
    Task.findById(id)
     .then(result => {
        res.render('edit', { task: result, title: 'Task Details' });
     })
     .catch(err => {
        console.log(err);
        res.render('404', { title: 'Invalid Task' });
      })
    ;
}

const updateTask = (req,res) => {
    console.log(req.body.taskTitle ,req.body.taskStatus, req.body.taskDate, req.body.taskDes)
    const task = new Task(req.body);
    const id = req.params.id;
    const pt = '/tasks/' +  id;
    Task.findByIdAndUpdate(id, {taskTitle: task.taskTitle, taskStatus: task.taskStatus, taskDate: task.taskDate, taskDes: task.taskDes})
     .then(result => {
        res.redirect(id);
     })
     .catch(err => {
        console.log(err);
        res.render('404', { title: 'Invalid Task' });
      })
    ;
}


const deleteTask = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
     .then(result => {
        res.json({ redirect: '/tasks' });
     })
     .catch(err => { console.log(err); })
    ;
}

module.exports = {newTask, taskDetails, taskIndex, createTask, updateTask, editTask, deleteTask, searchTask}