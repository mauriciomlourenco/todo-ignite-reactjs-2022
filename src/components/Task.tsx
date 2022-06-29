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

    function handleDeleteTask() {
        onDeleteTask(singleTask.id);
    }

    function handleToggleRadio() {

        //console.log(singleTask.id)           
        updateToggleTask(singleTask.id);

    }


    return (
        <div className={styles.taskContainer}>


            <div className={styles.round}>
                <input className={styles.round} type="checkbox" name="task" checked={singleTask.isComplete} onChange={handleToggleRadio} id={singleTask.id} />
                <label htmlFor={singleTask.id}></label>

                <p className={styles.taskText}>{singleTask.title}</p>
            </div>

            <button
                onClick={handleDeleteTask}
            >
                <img src={trashIcon} alt="Ícone Lixeira" />
            </button>

        </div>
    );
}