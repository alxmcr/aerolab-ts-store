import { Product } from "components/Product";
import { GridProductsProps } from "componentsTypes";
import "./GridProducts.css";

export const GridProducts = ({ products }: GridProductsProps) => {
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