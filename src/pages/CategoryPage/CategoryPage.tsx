import { AppHeader } from 'components/AppHeader';
import { CategoryBanner } from 'components/CategoryBanner';
import { SectionProducts } from 'components/SectionProducts';
import { CartReducerProps, UserReducerContextProps, UserReducerState } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { CartReducerContext } from 'context/CartReducerContext';
import { UserReducerContext } from 'context/UserReducerContext';
import { useContext, useReducer } from 'react';
import { cartReducer, initialCartState } from 'reducers/cartReducer';
import { userReducer } from 'reducers/userReducer';
import './CategoryPage.css';

export const CategoryPage = () => {
    // User
    const userValue = useContext(AuthContext);
    const initialUserState: UserReducerState = { me: userValue.me }
    const [userState, userDispatch] = useReducer(userReducer, initialUserState)
    const valueUserReducerContext: UserReducerContextProps = {
        me: userState.me,
        dispatch: userDispatch
    }
    // Cart
    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
    const cartValue: CartReducerProps = {
        cart: cartState.cart,
        dispatch: cartDispatch
    }

    return (
        <UserReducerContext.Provider value={valueUserReducerContext}>
            <CartReducerContext.Provider value={cartValue}>
                <AppHeader />
                <CategoryBanner categoryTitle="Electronics" />
                <section className="category__container">
                    <SectionProducts />
                </section>
            </CartReducerContext.Provider>
        </UserReducerContext.Provider>
    )
}