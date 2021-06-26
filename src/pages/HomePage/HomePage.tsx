import { CategoryHeader } from 'components/CategoryHeader'
import { SectionProducts } from 'components/SectionProducts'

export const HomePage = () => {
    return (
        <>
            <CategoryHeader categoryTitle="Electronics" />
            <SectionProducts />
        </>
    )
}