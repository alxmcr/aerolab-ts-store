import { GalleryProducts } from "components/GalleryProducts"
import { ProductsToolbar } from "components/ProductsToolbar"

export const SectionProducts = () => {
    return (
        <section className="products">
            <ProductsToolbar />
            <GalleryProducts />
        </section>
    )
}