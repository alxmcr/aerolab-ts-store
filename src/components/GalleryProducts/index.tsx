import { GridProducts } from "components/GridProducts";
import { ProductsToolbar } from "components/ProductsToolbar";
import { useProducts } from "hooks/useProducts";
import { useState } from "react";
import "./GalleryProducts.css";


export const GalleryProducts = () => {
    const limitByPage = 16;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [methodSort, setMethodSort] = useState<string>("recent");
    const { products, loading, error } = useProducts({
        methodSort,
        currentPage,
        limitByPage
    })

    if (loading) return <p>Loading products...</p>
    if (error !== null) return <p>There was an error while we're loading the products.</p>

    return (
        <div className="gallery">
            <ProductsToolbar
                methodSort={methodSort}
                setMethodSort={setMethodSort}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                products={products}
                limitByPage={limitByPage}
            />
            <GridProducts products={products} />
        </div>
    )
}