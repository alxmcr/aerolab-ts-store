import header from 'assets/header.png'
import { CategoryHeaderProps } from 'componentsTypes'
import './CategoryHeader.css'


export const CategoryHeader = ({ categoryTitle }: CategoryHeaderProps) => {
    return (
        <section className="banner">
            {/* <img
                src={header}
                alt={`Banner ${categoryTitle}`}
                className="banner__image"
            /> */}
            {/* <h1 className="banner__title">{categoryTitle}</h1> */}
        </section>
    )
}