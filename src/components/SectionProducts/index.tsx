import { GalleryProducts } from "components/GalleryProducts"
import { ProductsToolbar } from "components/ProductsToolbar"

export const SectionProducts = () => {
    return (
        <section className="products">
            <div className="products__banner">
                <img src="" alt="" />
            </div>
            <ProductsToolbar />
            <GalleryProducts />
        </section>
    )
}