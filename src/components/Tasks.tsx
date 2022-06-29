import styles from './Tasks.module.css';
import clipboardSymbol from '../assets/Clipboard.svg'
import { Task } from './Task';

interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean;
}

interface TasksProps {
    content: TaskProps[];
    deleteTask: (idTask: string) => void;
    changeTasks: (idTask: string) => void;
}

export function Tasks({ content, deleteTask, changeTasks }: TasksProps) {
    const countTasks = content.length;
    const countCompletedTasks = content.filter(task => task.isComplete).length;
    

    return (
        <div className={styles.tasksContainer}>
            <header className={styles.info}>
                <div className={styles.createdTasksContainer}>
                    <span className={styles.createdText}>Tarefas Criadas</span>
                    <span className={styles.tasksCount}>{countTasks}</span>
                </div>

                {
                    countTasks === 0
                        ?
                        <div className={styles.doneTasksContainer}>
                            <span className={styles.doneText}>Concluídas</span>
                            <span className={styles.tasksCount}>{countTasks}</span>
                        </div>

                        :
                        <div className={styles.doneTasksContainerCompleted}>
                            <span className={styles.doneText}>Concluídas</span>
                            <span className={styles.tasksCountCompleted}>{`${countCompletedTasks} de ${countTasks}`}</span>
                        </div>
                }

            </header>

            {countTasks === 0 ?
                <div className={styles.emptyTasksContainer}>
                    <img src={clipboardSymbol} />
                    <p>Você ainda não tem tarefas cadastradas
                        <span><br />Crie tarefas e organize seus itens a fazer</span></p>

                </div>
                :
                content.map(task => {
                    return (
                        <Task
                            key={task.id}
                            singleTask={task}                           
                            onDeleteTask={deleteTask}
                            updateToggleTask={changeTasks}                            
                        />
                    )
                })
            }



        </div>
    );
}