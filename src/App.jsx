import styles from './App.module.scss'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
