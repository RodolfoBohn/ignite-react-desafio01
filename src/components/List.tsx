import { ClipboardText, Trash } from "@phosphor-icons/react";

import styles from "./List.module.css";
import { Task, TaskType } from "./Task";

interface ListProps {
  tasks: TaskType[];
  onUpdateTaskStatus: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export const List = ({
  tasks,
  onUpdateTaskStatus,
  onDeleteTask,
}: ListProps) => {
  const shouldRenderEmptyList = tasks.length === 0;

  const createdTasks = tasks.length;

  const closedTasks = tasks.reduce((acc, task) => {
    if (task.isDone) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.wrapper}>
      <header>
        <span className={styles.createdTasks}>
          Tarefas criadas{" "}
          <span className={styles.quantityOfTasks}>{createdTasks}</span>
        </span>
        <span className={styles.doneTasks}>
          Concluídas{" "}
          <span className={styles.quantityOfTasks}>
            {`${closedTasks} de ${createdTasks}`}
          </span>
        </span>
      </header>

      {shouldRenderEmptyList ? (
        <div className={styles.emptyListWrapper}>
          <ClipboardText size={56} />
          <p>Você ainda não tem tarefas concluídas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className={styles.listWrapper}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onUpdateTaskStatus={onUpdateTaskStatus}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};
