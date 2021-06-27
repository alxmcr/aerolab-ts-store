import { AppHeader } from 'components/AppHeader';
import { CategoryBanner } from 'components/CategoryBanner';
import { SectionProducts } from 'components/SectionProducts';
import './HomePage.css';

export const HomePage = () => {
    return (
        <>
            <AppHeader />
            <CategoryBanner categoryTitle="Electronics" />
            <section className="home__container">
                <SectionProducts />
            </section>
        </>
    )
}