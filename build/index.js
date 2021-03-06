"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 3000;
const tasks_1 = require("./src/tasks");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Routes
app.post('/tasks', tasks_1.createTask);
app.get('/tasks', tasks_1.getTasks);
app.patch('/tasks/:taskId', tasks_1.updateTasks);
app.delete('/tasks/:taskId', tasks_1.deleteTasks);
app.listen(PORT, () => {
    console.log('Listening on Port; ', PORT);
});
