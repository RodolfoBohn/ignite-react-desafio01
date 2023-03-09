import { Check, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export interface TaskType {
  id: string;
  isDone: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
  onUpdateTaskStatus: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export const Task = ({ task, onUpdateTaskStatus, onDeleteTask }: TaskProps) => {
  function handleChange() {
    onUpdateTaskStatus(task.id);
  }

  const classes = `${styles.taskWrapperBase} ${
    task.isDone ? styles.taskWrapperDone : styles.taskWrapperDefault
  }`;

  return (
    <div className={classes}>
      <label key={task.id} className={styles.task}>
        <input
          type={"checkbox"}
          onChange={handleChange}
          checked={task.isDone}
        />
        {task.content}
      </label>
      <button
        title="Deletar tarefa"
        onClick={() => {
          onDeleteTask(task.id);
        }}
      >
        <Trash size={24} />
      </button>
    </div>
  );
};
