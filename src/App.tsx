import { UserAuthState } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { invalidUser, mapperToUserAuthStateAPI } from 'helpers/userHelpers';
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
    <AuthContext.Provider value={{ me: authValue }}>
      {authValue.id === null
        ? (
          <div className={styles.AppLoading}>
            <p className={styles.AppLoadingMsg}>Loading...</p>
          </div>
        )
        : (
          <div className={styles.App}>
            <BrowserRouter>
              <SwitchRoutesApp />
            </BrowserRouter >
          </div>
        )

      }
    </AuthContext.Provider>
  );
}

export default App;
