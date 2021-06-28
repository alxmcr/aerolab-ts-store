import arrowLeft from "assets/icons/arrow-left.svg";
import arrowRight from "assets/icons/arrow-right.svg";
import { ProductsToolbarProps } from "componentsTypes";
import { useState } from "react";
import './ProductsToolbar.css';

export const ProductsToolbar = ({
    products = [],
    limitByPage = 16,
    methodSort,
    setMethodSort
}: ProductsToolbarProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const handleNextPage = () => {
        console.log("Next page...");
        setCurrentPage((prev) => {
            return prev + 1
        })
    }
    const handlePreviousPage = () => {
        console.log("Previous page...");
        setCurrentPage((prev) => {
            return prev - 1
        })
    }
    const handleMostRecentProducts = () => setMethodSort("recent")
    const handleLowestProducts = () => setMethodSort("lowest")
    const handleHighestProducts = () => setMethodSort("highest")

    return (
        <div className="toolbar">
            <div className="toolbar__status">
                <p className="toolbar__quantity">
                    {currentPage * limitByPage} of {products.length} products
                </p>
            </div>
            <div className="toolbar__actions">
                <div className="toolbar__sort">
                    <p className="toolbar__description">Sort by:</p>
                    <div className="toolbar__buttons">
                        <button
                            className={`toolbar__button ${methodSort === "recent" && 'toolbar__button--selected'} toolbar__button--filter`}
                            onClick={handleMostRecentProducts}
                        >Most recent</button>
                        <button
                            className={`toolbar__button ${methodSort === "lowest" && 'toolbar__button--selected'} toolbar__button--filter`}
                            onClick={handleLowestProducts}
                        >Lowest price</button>
                        <button
                            className={`toolbar__button ${methodSort === "highest" && 'toolbar__button--selected'} toolbar__button--filter`}
                            onClick={handleHighestProducts}
                        >Highest price</button>
                    </div>
                </div>
                <div className="toolbar__arrows">
                    <button className="toolbar__button" onClick={handlePreviousPage}>
                        <img
                            src={arrowLeft}
                            alt="Previous page"
                            className="toolbar__icon"
                        />
                    </button>
                    <button className="toolbar__button" onClick={handleNextPage}>
                        <img
                            src={arrowRight}
                            alt="Next page"
                            className="toolbar__icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}