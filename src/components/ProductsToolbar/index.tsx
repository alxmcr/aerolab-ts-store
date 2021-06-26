import { useState } from "react";
import './ProductsToolbar.css';

export const ProductsToolbar = () => {
    const [quantityProducts, setQuantityProducts] = useState<number>(16);
    const [quantityTotalProducts, setQuantityTotalProducts] = useState<number>(32);
    return (
        <div className="toolbar">
            <p className="toolbar__status">{quantityProducts} of {quantityTotalProducts} products</p>
            <div className="toolbar__sort">
                <p className="toolbar__description">Sorted by:</p>
                <div className="toolbar__buttons">
                    <button className="toolbar__button">Most recent</button>
                    <button className="toolbar__button">Lowest price</button>
                    <button className="toolbar__button">Highest price</button>
                </div>
            </div>
        </div>
    )
}