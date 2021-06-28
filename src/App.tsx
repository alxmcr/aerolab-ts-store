import { BrowserRouter } from 'react-router-dom';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <SwitchRoutesApp isAuthenticated={false} />
      </div>
    </BrowserRouter>
  );
}

export default App;
