import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import { List } from "./components/List";
import { TaskType } from "./components/Task";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [taskContent, setTaskContent] = useState("");

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskType = {
      id: uuidv4(),
      content: taskContent,
      isDone: false,
    };

    setTaskList((state) => {
      return [...state, newTask];
    });

    setTaskContent("");
  }

  function onUpdateTaskStatus(updatedTaskId: string) {
    setTaskList((state) => {
      return state.map((task) => {
        if (task.id === updatedTaskId) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        } else return task;
      });
    });
  }

  function onDeleteTask(deletedTaskId: string) {
    setTaskList((state) => {
      return state.filter((task) => task.id !== deletedTaskId);
    });
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleTaskSubmit}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={taskContent}
            onChange={handleTaskChange}
            required
          ></input>
          <button type="submit" disabled={taskContent.length === 0}>
            Criar <PlusCircle size={16} />
          </button>
        </form>
        <List
          tasks={taskList}
          onUpdateTaskStatus={onUpdateTaskStatus}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </>
  );
}

export default App;
