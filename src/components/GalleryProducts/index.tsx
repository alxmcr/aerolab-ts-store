import { GridProducts } from "components/GridProducts";
import { GalleryProductsProps } from "componentsTypes";
import { useProducts } from "hooks/useProducts";
import "./GalleryProducts.css";


export const GalleryProducts = ({ methodSort = 'recent' }: GalleryProductsProps) => {
    return (
        <div className="gallery">
            <GridProducts methodSort={methodSort} />
        </div>
    )
}