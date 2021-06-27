import { AppHeader } from 'components/AppHeader';
import { CategoryBanner } from 'components/CategoryBanner';
import { SectionProducts } from 'components/SectionProducts';
import './CategoryPage.css';

export const CategoryPage = () => {
    return (
        <>
            <AppHeader />
            <CategoryBanner categoryTitle="Electronics" />
            <section className="category__container">
                <SectionProducts />
            </section>
        </>
    )
}