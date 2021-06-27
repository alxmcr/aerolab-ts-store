import coin from 'assets/icons/coin.svg'
import logo from 'assets/logo.svg'
import { UserContextProps } from 'componentsTypes'
import "./AppHeader.css"

export const AppHeader = ({ me }: UserContextProps) => {
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
                            <span className="header__name">{me?.name}</span>
                            <div className="header__points">
                                <p className="header__value">{me?.points}</p>
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