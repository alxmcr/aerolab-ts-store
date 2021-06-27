import { GalleryProducts } from "components/GalleryProducts"
import { ProductsToolbar } from "components/ProductsToolbar"
import { useState } from "react"

export const SectionProducts = () => {
    const [methodSort, setMethodSort] = useState<string | undefined>()

    return (
        <section className="products">
            <ProductsToolbar />
            <GalleryProducts methodSort={methodSort} />
        </section>
    )
}