import arrowLeft from "assets/icons/arrow-left.svg";
import arrowRight from "assets/icons/arrow-right.svg";
import './ProductsToolbar.css';

export const ProductsToolbar = () => {
    const handleNextPage = () => { console.log("Next page..."); }
    const handlePreviousPage = () => { console.log("Previous page..."); }
    const handleMostRecentProducts = () => { console.log("Most Recent products..."); }
    const handleLowestProducts = () => { console.log("Lowest products..."); }
    const handleHighestProducts = () => { console.log("Highest products..."); }
    return (
        <div className="toolbar">
            <p className="toolbar__status">16 of 32 products</p>
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
            <div className="toolbar__sort">
                <p className="toolbar__description">Sorted by:</p>
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
        </div>
    )
}