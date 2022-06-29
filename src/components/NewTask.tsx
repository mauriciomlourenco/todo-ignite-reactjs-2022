import styles from './NewTask.module.css';
import plusVector from '../assets/plusVector.svg';
import { ChangeEvent, FormEvent, InputHTMLAttributes, InvalidEvent, useState } from 'react';

import {v4 as uuidv4} from 'uuid';

interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean;
  } 
 

  interface NewTaskProps {
    tasksState: TaskProps[];    
    setTasksFunction: (tasks: TaskProps[]) => void;
  }

export function NewTask({tasksState, setTasksFunction}: NewTaskProps) {
    const [inputIsDisabled, setInputIsDisabled] = useState(true);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const enableInput = () => {
        setInputIsDisabled(false);
    };

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskTitle(event.target.value);

        //console.log(newTaskTitle);
    }

    function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse Campo é obrigatório!');
    }

    const handleClickAddTask = (event: FormEvent) => {
        event.preventDefault();

        
        const newTask = {
            id: uuidv4(),
            title: newTaskTitle,
            isComplete: false
        }

        setTasksFunction([...tasksState, newTask]);

        setNewTaskTitle('');      
        
    }; 

    const isNewTaskEmpty = newTaskTitle.length === 0;

    return (
        <form className={styles.newTaskForm} onSubmit={handleClickAddTask}>
            <input 
                type="text" 
                placeholder="Adicione uma tarefa" 
                readOnly={inputIsDisabled} 
                onFocus={()=> setInputIsDisabled(false)} 
                onClick={enableInput} onBlur={()=> setInputIsDisabled(true)}
                value={newTaskTitle}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type="submit" onClick={handleClickAddTask} disabled={isNewTaskEmpty}>
                Criar 
                <img src={plusVector} />
            </button>
        </form>

    );
}