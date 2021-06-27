import buyBlue from 'assets/icons/buy-blue.svg';
import buyWhite from 'assets/icons/buy-white.svg';
import coin from 'assets/icons/coin.svg';
import { PointsPill } from 'components/PointsPill';
import { ProductProps } from 'componentsTypes';
import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';
import './Product.css';

export const Product = ({ product }: ProductProps) => {
    const me = useContext(AuthContext);

    if (me === null) return <p>User is not valid</p>

    const { _id, name, category, cost, img } = product;
    const altText = `Product: ${name}`;
    const handlerAddCart = () => {
        console.log("Add...", { product });
    }
    const handlerRedeemProduct = () => {
        console.log("Redeem...", { product });
    }
    return (
        <figure className="product" id={_id}>
            {me?.points >= cost
                ? (
                    <button
                        className="product__buy product__buy--blue"
                        onClick={handlerAddCart}>
                        <img src={buyBlue} alt="buy" className="product__icon" />
                    </button>
                )
                : (
                    <PointsPill variant="pill--need">
                        <>
                            You need ({cost - me?.points} )
                        </>
                    </PointsPill>
                )
            }
            <img src={img.hdUrl} alt={altText} className="product__image" />
            <figcaption className="product__details">
                <p className="product__category">{category}</p>
                <p className="product__name">{name}</p>
            </figcaption>
            <div className="product__overlay" id="overlay-product">
                <button
                    className="product__buy product__buy--white"
                    onClick={handlerAddCart}>
                    <img src={buyWhite} alt="buy" className="product__icon" />
                </button>
                <p className="product__cost">
                    <span className="product__value"> {cost} </span>
                    <span className="product__currency">
                        <img src={coin} alt="Coin" />
                    </span>
                </p>
                <button
                    className="product__button product__button--redeem"
                    onClick={handlerRedeemProduct}
                >Redeem now</button>
            </div>
        </figure >
    )
}