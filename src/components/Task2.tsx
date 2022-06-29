import styles from './Task.module.css';
import trashIcon from '../assets/trash.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface TaskStateProps {
    id: string;
    title: string;
    isComplete: boolean;
}

interface TaskProps {
    singleTask: TaskStateProps;
    onDeleteTask: (idTaskToDelete: string) => void;
    updateToggleTask: (idTaskToDelete: string) => void;

}
export function Task({ singleTask, onDeleteTask, updateToggleTask }: TaskProps) {
    const [isCompleted, setIsCompleted] = useState(singleTask.isComplete)

    function handleDeleteTask() {
        onDeleteTask(singleTask.id);
    }
    
    function handleToggleRadio(e: ChangeEvent<HTMLInputElement>) {
    
        //console.log(singleTask.id)

        console.log(e.target.checked)    
        updateToggleTask(singleTask.id);
        setIsCompleted(!isCompleted);
    
    }

    /*
    <form className={styles.round} >
                
                <input type="checkbox" name="task" checked={singleTask.isComplete} id="checkbox" />
                <label htmlFor="checkbox"></label>

                <p className={styles.taskText}>{`${singleTask.title} id: ${singleTask.id}`}</p>           
                

    </form>
    */


    return (
        <div className={styles.taskContainer} onChange={handleToggleRadio}>

            <input type="checkbox" checked={isCompleted} onChange={handleToggleRadio} /> 

            <p>{singleTask.title}</p>        


            <button
                onClick={handleDeleteTask}
            >
                <img src={trashIcon} alt="Ícone Lixeira" />
            </button>



        </div>
    );
}