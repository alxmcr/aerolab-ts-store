import { CategoryHeader } from 'components/CategoryHeader'
import { SectionProducts } from 'components/SectionProducts'
import './HomePage.css'

export const HomePage = () => {
    return (
        <>
            <CategoryHeader categoryTitle="Electronics" />
            <section className="home__container">
                <SectionProducts />
            </section>
        </>
    )
}