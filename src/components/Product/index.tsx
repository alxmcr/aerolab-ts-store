import { ProductProps } from "componentsTypes";
import './Product.css';

export const Product = ({ product }: ProductProps) => {
    const { _id, name, category, cost, img } = product;
    const altText = `Product: ${name}`;
    const handlerAddCart = () => {
        console.log("Add...", { product });
    }
    return (
        <figure className="product" id={_id}>
            <img src={img.hdUrl} alt={altText} className="product__image">
            </img>
            <figcaption className="product__details">
                <p className="product__category">{category}</p>
                <p className="product__name">{name}</p>
            </figcaption>
            <div className="product__overlay" id="overlay-product">
                <p className="product__cost">{cost} $</p>
                <button className="product__button product__button--redeem">Redeem now</button>
            </div>
        </figure>
    )
}