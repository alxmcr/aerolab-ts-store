import coin from 'assets/icons/coin.svg'
import logo from 'assets/logo.svg'
import { CartReducerContext } from 'context/CartReducerContext'
import { UserReducerContext } from 'context/UserReducerContext'
import { useContext } from 'react'
import "./AppHeader.css"

export const AppHeader = () => {
    // User
    const userValue = useContext(UserReducerContext)
    // Cart
    let cartValue = useContext(CartReducerContext);

    if (userValue === null) return <p>Credentials are not valid</p>
    if (userValue.me === null) return <p>User is not valid</p>

    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="/" className="header__link">
                            <img
                                src={logo}
                                alt="Aerolab logo"
                                className="header__icon header__icon--logo"
                            />
                            {cartValue?.cart.length > 0 && (
                                <p>Cart({cartValue?.cart.length})</p>
                            )}
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="/john" className="header__link">
                            <span className="header__name">{userValue.me.name}</span>
                            <div className="header__points">
                                <p className="header__value">{userValue.me.points}</p>
                                <img
                                    src={coin}
                                    alt="Coin"
                                    className="header__icon header__icon--coin"
                                />
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}