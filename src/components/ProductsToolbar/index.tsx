import arrowLeft from "assets/icons/arrow-left.svg";
import arrowRight from "assets/icons/arrow-right.svg";
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
                    <button className="toolbar__button toolbar__button--filter">Most recent</button>
                    <button className="toolbar__button toolbar__button--filter">Lowest price</button>
                    <button className="toolbar__button toolbar__button--filter">Highest price</button>
                </div>
            </div>
            <div className="toolbar__arrows">
                <button className="toolbar__button">
                    <img src={arrowLeft} alt="Previous page" className="toolbar__icon" />
                </button>
                <button className="toolbar__button">
                    <img src={arrowRight} alt="Next page" className="toolbar__icon" />
                </button>
            </div>
        </div>
    )
}