import coin from 'assets/icons/coin.svg'
import logo from 'assets/logo.svg'
import { PointsPill } from 'components/PointsPill'
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
                <div className="header__group">
                    <a href="/" className="header__link">
                        <img
                            src={logo}
                            alt="Aerolab logo"
                            className="header__icon header__icon--logo"
                        />
                    </a>
                </div>
                <div className="header__group">
                    <a href="/john" className="header__link">
                        <span className="header__name">{userValue.me.name}</span>
                        <PointsPill>{userValue.me.points}</PointsPill>
                    </a>
                    <a href="/cart" className="header__link">
                        {cartValue?.cart.length > 0 && (
                            <p>({cartValue?.cart.length})</p>
                        )}
                    </a>
                </div>
            </nav>
        </header>
    )
}