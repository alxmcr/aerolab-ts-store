import arrowLeft from "assets/icons/arrow-left.svg";
import arrowRight from "assets/icons/arrow-right.svg";
import { ProductsToolbarProps } from "componentsTypes";
import './ProductsToolbar.css';

export const ProductsToolbar = ({ dispatch }: ProductsToolbarProps) => {
    const handleNextPage = () => { console.log("Next page..."); }
    const handlePreviousPage = () => { console.log("Previous page..."); }
    const handleMostRecentProducts = () => {
        console.log("Most Recent products...");
        dispatch({ type: "changeMethodSort", payload: { methodSort: "recent", products: [] } })
    }
    const handleLowestProducts = () => {
        console.log("Lowest products...");
        dispatch({ type: "changeMethodSort", payload: { methodSort: "lowest", products: [] } })
    }
    const handleHighestProducts = () => {
        console.log("Highest products...");
        dispatch({ type: "changeMethodSort", payload: { methodSort: "highest", products: [] } })
    }
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
                            className="toolbar__button toolbar__button--filter"
                            onClick={handleMostRecentProducts}
                        >Most recent</button>
                        <button
                            className="toolbar__button toolbar__button--filter"
                            onClick={handleLowestProducts}
                        >Lowest price</button>
                        <button
                            className="toolbar__button toolbar__button--filter"
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