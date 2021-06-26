import { useState } from "react";
import './ProductsToolbar.css';

export const ProductsToolbar = () => {
    const [quantityProducts, setQuantityProducts] = useState<number>(16);
    const [quantityTotalProducts, setQuantityTotalProducts] = useState<number>(32);
    return (
        <div className="filter">
            <p className="filter__status">{quantityProducts} of {quantityTotalProducts}</p>
            <div className="filter__sort">
                <p className="filter__description">Sorted by</p>
                <div className="filter__buttons">
                    <button className="filter__button">Most recent</button>
                    <button className="filter__button">Lowest price</button>
                    <button className="filter__button">Highest price</button>
                </div>
            </div>
        </div>
    )
}