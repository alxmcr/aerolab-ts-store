import { GalleryProducts } from "components/GalleryProducts"
import { ProductsToolbar } from "components/ProductsToolbar"
import { useReducer } from "react"
import { initialStateToolbarReducer, toolbarReducer } from "reducers/toolbarReducer"

export const SectionProducts = () => {
    const [state, dispatch] = useReducer(toolbarReducer, initialStateToolbarReducer)
    console.log({ state })
    return (
        <section className="products">
            <ProductsToolbar dispatch={dispatch} />
            <GalleryProducts />
        </section>
    )
}