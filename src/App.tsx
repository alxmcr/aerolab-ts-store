import { UserReducerState } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { isUserAuthenticated } from 'helpers/userHelpers';
import { useAuth } from 'hooks/useAuth';
import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { userReducer } from 'reducers/userReducer';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import styles from './App.module.css';

function App() {
  const { me } = useAuth();
  const initialUserState: UserReducerState = { me }
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const authValue = { me }
  return (
    <BrowserRouter>
      <AuthContext.Provider value={authValue}>
        <div className={styles.App}>
          <SwitchRoutesApp isAuthenticated={isUserAuthenticated(me)} />
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
