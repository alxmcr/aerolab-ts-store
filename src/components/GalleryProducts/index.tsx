import { GridProducts } from "components/GridProducts";
import { ProductsToolbar } from "components/ProductsToolbar";
import { useProducts } from "hooks/useProducts";
import { useState } from "react";
import "./GalleryProducts.css";


export const GalleryProducts = () => {
    const [methodSort, setMethodSort] = useState<string>("recent");
    const { products, loading, error } = useProducts({ methodSort })

    if (loading) return <p>Loading products...</p>
    if (error !== null) return <p>There was an error while we're loading the products.</p>

    return (
        <div className="gallery">
            <ProductsToolbar
                methodSort={methodSort}
                setMethodSort={setMethodSort}
                products={products}
            />
            <GridProducts products={products} />
        </div>
    )
}