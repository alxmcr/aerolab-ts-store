import { UserContextProps } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { useMe } from 'hooks/useMe';
import { BrowserRouter } from 'react-router-dom';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import styles from './App.module.css';

function App() {
  const { me } = useMe();

  return (
    <BrowserRouter>
      <AuthContext.Provider value={me}>
        <div className={styles.App}>
          <SwitchRoutesApp />
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
