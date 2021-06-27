import { Product } from "components/Product";
import { GalleryProductsProps } from "componentsTypes";
import { useProducts } from "hooks/useProducts";
import "./GalleryProducts.css";

export const GalleryProducts = ({ methodSort = 'recent' }: GalleryProductsProps) => {
    const { products, loading, error } = useProducts({ methodSort });

    if (loading) return <p>Loading products...</p>
    if (error !== null) return <p>There was an error while we're loading the products.</p>

    return (
        <div className="gallery">
            {
                products.map(product => (
                    <Product key={product._id} product={product} />
                ))
            }
        </div>
    )
}