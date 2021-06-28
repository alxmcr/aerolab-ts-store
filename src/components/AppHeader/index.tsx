import coin from 'assets/icons/coin.svg'
import logo from 'assets/logo.svg'
import { AuthContext } from 'context/AuthContext'
import { useContext } from 'react'
import "./AppHeader.css"

export const AppHeader = () => {
    const value = useContext(AuthContext)

    if (value === null) return <p>Credentials are not valid</p>
    if (value.me === null) return <p>User is not valid</p>

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
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="/john" className="header__link">
                            <span className="header__name">{value.me.name}</span>
                            <div className="header__points">
                                <p className="header__value">{value.me.points}</p>
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