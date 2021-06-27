import { CategoryBanner } from 'components/CategoryBanner';
import { SectionProducts } from 'components/SectionProducts';
import './HomePage.css';

export const HomePage = () => {
    return (
        <>
            <CategoryBanner categoryTitle="Electronics" />
            <section className="home__container">
                <SectionProducts />
            </section>
        </>
    )
}