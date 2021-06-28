import { AuthContext } from 'context/AuthContext';
import { isUserAuthenticated } from 'helpers/userHelpers';
import { useAuth } from 'hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import styles from './App.module.css';

function App() {
  const { me } = useAuth();
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ me }}>
        <div className={styles.App}>
          <SwitchRoutesApp isAuthenticated={isUserAuthenticated(me)} />
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
