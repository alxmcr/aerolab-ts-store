import { GalleryProducts } from "components/GalleryProducts"
import { ProductsToolbar } from "components/ProductsToolbar"
import { useReducer, useState } from "react"
import { initialStateToolbarReducer, toolbarReducer } from "reducers/toolbarReducer"

export const SectionProducts = () => {
    const [methodSort, setMethodSort] = useState<string>("");
    return (
        <section className="products">
            <ProductsToolbar setMethodSort={setMethodSort} />
            <GalleryProducts methodSort={methodSort} />
        </section>
    )
}