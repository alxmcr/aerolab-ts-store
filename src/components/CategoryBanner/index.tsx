import { CategoryBannerProps } from 'componentsTypes'
import './CategoryBanner.css'


export const CategoryBanner = ({ categoryTitle }: CategoryBannerProps) => {
    return (
        <section className="banner">
            <h1 className="banner__title">{categoryTitle}</h1>
        </section>
    )
}