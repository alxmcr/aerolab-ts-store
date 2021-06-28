import { Product } from "components/Product";
import { GridProductsProps } from "componentsTypes";
import { useProductsPaginated } from "hooks/useProductsPaginated";
import "./GridProducts.css";

export const GridProducts = ({
    products = [],
    currentPage = 1,
    limitByPage = 16
}: GridProductsProps) => {
    const { productsPaginated, loading, error } = useProductsPaginated({ products, currentPage, limitByPage });

    if (loading) return <p>Loading products...</p>
    if (error !== null) return <p>There was an error while we're loading the products.</p>

    return (
        <div className="grid--products">
            {productsPaginated.length === 0 && (
                <p>I'm so sorry! There are not products registered yet.</p>
            )}
            {
                productsPaginated.map(product => (
                    <Product key={product._id} product={product} />
                ))
            }
        </div>
    )
}