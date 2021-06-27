import { AppHeader } from 'components/AppHeader';
import { CategoryBanner } from 'components/CategoryBanner';
import { SectionProducts } from 'components/SectionProducts';
import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';
import './HomePage.css';

export const HomePage = () => {
    const me = useContext(AuthContext);
    return (
        <>
            <AppHeader me={me} />
            <CategoryBanner categoryTitle="Electronics" />
            <section className="home__container">
                <SectionProducts />
            </section>
        </>
    )
}