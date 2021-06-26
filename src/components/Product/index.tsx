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
                <button
                    className="product__btn product__btn--cart"
                    onClick={handlerAddCart}
                >
                    Cart
                </button>
            </div>
            <div className="product__body">
                <img src={img.url} alt={`Product: ${name}`} className="product__img" />
            </div>
            <div className="product__details">
                <p className="product__category">{category}</p>
                <p className="product__name">{name}</p>
            </div>
        </div>
    )
}