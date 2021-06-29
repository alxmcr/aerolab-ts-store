import arrowLeft from "assets/icons/arrow-left.svg";
import coin from "assets/icons/coin.svg";
import { CartReducerContext } from "context/CartReducerContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

export const CartPage = () => {
    // Cart
    const cartValue = useContext(CartReducerContext);
    const total = cartValue.cart.reduce((total: number, product) => {
        return total + product.cost
    }, 0)
    return (
        <section className="cart">
            <div className="cart__products">
                <div className="cart__header">
                    <Link to="/" className="cart__link">
                        <img
                            src={arrowLeft}
                            alt="Arrow Left icon"
                            className="cart__icon cart__icon--arrow"
                        />
                    </Link>
                    <p className="cart__heading">My Cart</p>
                    <p className="cart__total">
                        <span className="cart__text">{total}</span>
                        <img
                            src={coin}
                            alt="Coin icon"
                            className="cart__icon cart__icon--coin"
                        />
                    </p>
                </div>
                <div className="cart__body">
                    {
                        cartValue.cart.map((product) => (
                            <div
                                className="cart__item"
                                key={product._id}
                            >
                                <img
                                    className="cart__image"
                                    src={product.img.hdUrl}
                                    alt={`Product: ${product.name}`}
                                />
                                <div className="cart__details">
                                    <p className="cart__name">
                                        {product.name} ({product.quantity} unit(s))
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart__footer">
                    <button className="cart__button cart__button--pay">PAY NOW</button>
                </div>
            </div>
        </section>
    )
}