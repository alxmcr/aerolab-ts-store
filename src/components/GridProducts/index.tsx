import { Product } from "components/Product"
import { GridProductsProps } from "componentsTypes"
import "./GridProducts.css"

export const GridProducts = ({ products = [] }: GridProductsProps) => {
    if (products.length === 0) return <p>I'm so sorry, there is not some product.</p>

    return (
        <div className="grid--products">
            {
                products.map(product => (
                    <Product key={product._id} product={product} />
                ))
            }
        </div>
    )
}