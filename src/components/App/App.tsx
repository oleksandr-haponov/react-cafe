import styles from './App.module.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Menu />
      </main>
    </div>
  );
}

export default App;
