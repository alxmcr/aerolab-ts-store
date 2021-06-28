import buyBlue from 'assets/icons/buy-blue.svg';
import buyWhite from 'assets/icons/buy-white.svg';
import coin from 'assets/icons/coin.svg';
import { PointsPill } from 'components/PointsPill';
import { ProductProps } from 'componentsTypes';
import { CartReducerContext } from 'context/CartReducerContext';
import { UserReducerContext } from 'context/UserReducerContext';
import { useContext } from 'react';
import './Product.css';

export const Product = ({ product }: ProductProps) => {
    const userValue = useContext(UserReducerContext);
    let cartValue = useContext(CartReducerContext);

    if (userValue === null) return <p>Credentials are not valid</p>
    if (userValue.me === null) return <p>User is not valid</p>

    const { _id, name, category, cost, img } = product;
    const altText = `Product: ${name}`;

    const handlerAddCart = () => {
        // console.log("Add...", { product });
        const { dispatch } = cartValue;

        console.log("BEFORE", { cartValue })
        if (dispatch !== undefined) {
            dispatch({ type: "addProduct", payload: { product } })
        }
        console.log("AFTER", { cartValue })
    }
    const handlerRedeemProduct = () => {
        const { cost } = product
        // console.log(`Redeem -${cost}`);
        const { dispatch } = userValue;

        if (dispatch !== undefined) {
            dispatch({ type: "decrementPoints", payload: { points: cost } })
        }
    }
    return (
        <figure
            className={`product ${userValue.me?.points >= cost && 'product--posible'}`}
            id={_id}
        >
            {userValue.me?.points >= cost
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
                            You need ({cost - userValue.me?.points} )
                        </>
                    </PointsPill>
                )
            }
            <img src={img.hdUrl} alt={altText} className="product__image" />
            <figcaption className="product__details">
                <p className="product__category">{category}</p>
                <p className="product__name">{name}</p>
            </figcaption>
            {userValue.me?.points >= cost && (
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
            )
            }
        </figure >
    )
}