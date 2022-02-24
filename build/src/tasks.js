"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasks = exports.updateTasks = exports.getTasks = exports.createTask = void 0;
const connectDb_1 = require("./connectDb");
const createTask = (req, res) => {
    const newTask = {
        task: req.body.task,
        done: false
    };
    const db = (0, connectDb_1.connectDb)();
    db.collection('tasks').add(newTask)
        .then(doc => res.status(201).send(doc.id))
        .catch(err => res.status(500).send(err));
};
exports.createTask = createTask;
const getTasks = (req, res) => {
    const db = (0, connectDb_1.connectDb)();
    db.collection('tasks').get()
        .then(snapshot => {
        const taskList = snapshot.docs.map(doc => {
            let task = doc.data();
            task.id = doc.id;
            return task;
        });
        res.send(taskList);
    })
        .catch(err => res.status(500).send(err));
};
exports.getTasks = getTasks;
const updateTasks = (req, res) => {
    const { taskId } = req.params;
    const isDone = req.body.done;
    const db = (0, connectDb_1.connectDb)();
    db.collection('tasks').doc(taskId).update({ done: isDone })
        .then(doc => res.status(202).send(doc))
        .catch(err => res.status(500).send(err));
};
exports.updateTasks = updateTasks;
const deleteTasks = (req, res) => {
    const { taskId } = req.params;
    const db = (0, connectDb_1.connectDb)();
    db.collection('tasks')
        .doc(taskId)
        .delete()
        .then(() => {
        res.send('Deleted Task');
    })
        .catch((err) => res.status(500).send(err));
};
exports.deleteTasks = deleteTasks;
