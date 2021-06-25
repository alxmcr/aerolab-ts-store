import { ProductProps } from "componentsTypes";
import './Product.css';

export const Product = ({ product }: ProductProps) => {
    const { _id, name, category, cost, img } = product;
    const handlerAddCart = () => {
        console.log("Add...", { product });
    }
    return (
        <div className="product" id={_id}>
            <div className="product__header">
                <img src={img.url} alt={`Product: ${name}`} className="product__img" />
                <button
                    className="product__btn product__btn--cart"
                    onClick={handlerAddCart}
                >
                    Cart
                </button>
            </div>
            <div className="product__body">
                <p className="product__category">{category}</p>
                <p className="product__cost">{cost}</p>
            </div>
        </div>
    )
}