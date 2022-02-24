import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
import { getTasks, createTask, updateTasks, deleteTasks } from './src/tasks'

const app = express();
app.use(cors());
app.use(express.json());

//Routes

app.post('/tasks', createTask);
app.get('/tasks', getTasks);
app.patch('/tasks/:taskId', updateTasks);
app.delete('/tasks/:taskId', deleteTasks)



app.listen(PORT, () => {
    console.log('Listening on Port; ', PORT)
})