import { FilterToolbar } from "components/FilterToolbar"
import { GalleryProducts } from "components/GalleryProducts"

export const SectionProducts = () => {
    return (
        <section className="products">
            <div className="products__banner">
                <img src="" alt="" />
            </div>
            <FilterToolbar />
            <GalleryProducts />
        </section>
    )
}