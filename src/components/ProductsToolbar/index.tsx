import arrowLeft from "assets/icons/arrow-left.svg";
import arrowRight from "assets/icons/arrow-right.svg";
import { ProductsToolbarProps } from "componentsTypes";
import './ProductsToolbar.css';

export const ProductsToolbar = ({ methodSort, setMethodSort }: ProductsToolbarProps) => {
    const handleNextPage = () => {
        console.log("Next page...");
    }
    const handlePreviousPage = () => {
        console.log("Previous page...");
    }
    const handleMostRecentProducts = () => setMethodSort("recent")
    const handleLowestProducts = () => setMethodSort("lowest")
    const handleHighestProducts = () => setMethodSort("highest")

    return (
        <div className="toolbar">
            <div className="toolbar__status">
                <p className="toolbar__quantity">16 of 32 products</p>
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
                    <button className="toolbar__button" onClick={handleNextPage}>
                        <img
                            src={arrowLeft}
                            alt="Previous page"
                            className="toolbar__icon"
                        />
                    </button>
                    <button className="toolbar__button" onClick={handlePreviousPage}>
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