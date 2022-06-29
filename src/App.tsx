import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import './global.css';
import styles from "./App.module.css";
/*
import {v4 as uuidv4} from 'uuid';

const tasks = [
  {
    id: uuidv4(), 
    title: 'Terminar o desafio',
    isComplete: true,
  },
  {
    id: uuidv4(), 
    title: 'Estudar TypeScript',
    isComplete: false,
  },
  
]

//mudar estado tarefa
const newTasks = tasks.map(task => {
  if (task.id === id) {
    task.isComplete = !task.isComplete;
  }
  return task
})

//remover tarefa
const tasksWithoutDeletedOne = taks.filter(task => {
  return task.id !== id
}
setTasks(tasksWithoutDeletedOne)
*/

interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleDeleteTask( idTaskToDelete:string ) {

    const taksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== idTaskToDelete;
    });

    setTasks(taksWithoutDeletedOne);

  }

  function handleToggleTaskChanged (idTaskTChanged:string){
    console.log(idTaskTChanged);
    const newTasksChanged = tasks.map(task => {

      if (task.id === idTaskTChanged){
        return {...task, isComplete: !task.isComplete}
      }
      else {
        return task
      }
    })

    setTasks(newTasksChanged);
  }
   
 
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <NewTask
        tasksState={tasks}
        setTasksFunction={setTasks}
        
      />
      <Tasks
        content = {tasks}
        deleteTask = {handleDeleteTask}
        changeTasks = {handleToggleTaskChanged}
      />
      </div>
    </div>
  )
}
