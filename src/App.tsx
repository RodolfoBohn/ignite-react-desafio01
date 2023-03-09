import styles from "./App.module.css";
import { PlusCircle, ClipboardText } from "@phosphor-icons/react";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input placeholder="Adicione uma nova tarefa"></input>
          <button>
            Criar <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.listWrapper}>
          <header>
            <span className={styles.createdTasks}>
              Tarefas criadas <span className={styles.quantityOfTasks}>0</span>
            </span>
            <span className={styles.doneTasks}>
              Concluídas <span className={styles.quantityOfTasks}>0</span>
            </span>
          </header>
          <div className={styles.emptyListWrapper}>
            <ClipboardText size={56} />
            <p>Você ainda não tem tarefas concluídas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
