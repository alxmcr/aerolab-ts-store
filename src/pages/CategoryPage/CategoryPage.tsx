import { AppHeader } from 'components/AppHeader';
import { CategoryBanner } from 'components/CategoryBanner';
import { SectionProducts } from 'components/SectionProducts';
import { UserReducerContextProps, UserReducerState } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { UserReducerContext } from 'context/UserReducerContext';
import { useContext, useReducer } from 'react';
import { userReducer } from 'reducers/userReducer';
import './CategoryPage.css';

export const CategoryPage = () => {
    const userValue = useContext(AuthContext);
    const initialUserState: UserReducerState = { me: userValue.me }
    const [state, dispatch] = useReducer(userReducer, initialUserState)
    const valueUserReducerContext: UserReducerContextProps = { me: state.me, dispatch }
    return (
        <UserReducerContext.Provider value={valueUserReducerContext}>
            <AppHeader />
            <CategoryBanner categoryTitle="Electronics" />
            <section className="category__container">
                <SectionProducts />
            </section>
        </UserReducerContext.Provider>
    )
}