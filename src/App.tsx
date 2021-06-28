import { UserAuthState } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { invalidUser, isUserAuthenticated, mapperToUserAuthStateAPI } from 'helpers/userHelpers';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import styles from './App.module.css';

function App() {
  const { me, loading } = useAuth();
  const [authValue, setAuthValue] = useState<UserAuthState>(invalidUser);

  useEffect(() => {
    if (!loading) {
      const authValueState = mapperToUserAuthStateAPI(me);
      setAuthValue(authValueState)
    }
  }, [me, loading])

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ me: authValue }}>
        <div className={styles.App}>
          <SwitchRoutesApp
            isAuthenticated={isUserAuthenticated(authValue)}
          />
        </div>
      </AuthContext.Provider>
    </BrowserRouter >
  );
}

export default App;
