import { CartReducerProps, UserAuthState } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { CartReducerContext } from 'context/CartReducerContext';
import { invalidUser, mapperToUserAuthStateAPI } from 'helpers/userHelpers';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useReducer, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cartReducer, initialCartState } from 'reducers/cartReducer';
import { SwitchRoutesApp } from 'routing/SwitchRoutesApp';
import styles from './App.module.css';

function App() {
  // User Auth
  const { me, loading } = useAuth();
  const [authValue, setAuthValue] = useState<UserAuthState>(invalidUser);
  // Cart
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  const cartValue: CartReducerProps = {
    cart: cartState.cart,
    dispatch: cartDispatch
  }

  useEffect(() => {
    if (!loading) {
      const authValueState = mapperToUserAuthStateAPI(me);
      setAuthValue(authValueState)
    }
  }, [me, loading])

  return (
    <AuthContext.Provider value={{ me: authValue }}>
      <CartReducerContext.Provider value={cartValue}>
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
      </CartReducerContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
