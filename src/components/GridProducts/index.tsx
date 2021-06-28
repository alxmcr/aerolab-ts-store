import { Product } from "components/Product";
import { GridProductsProps } from "componentsTypes";
import { useProducts } from "hooks/useProducts";
import "./GridProducts.css";

export const GridProducts = ({ methodSort = '' }: GridProductsProps) => {
    const { products, loading, error } = useProducts({ methodSort });

    if (loading) return <p>Loading products...</p>
    if (error !== null) return <p>There was an error while we're loading the products.</p>

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