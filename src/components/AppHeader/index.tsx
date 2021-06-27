import coin from 'assets/icons/coin.svg'
import logo from 'assets/logo.svg'
import { useMe } from 'hooks/useMe'
import "./AppHeader.css"


export const AppHeader = () => {
    const { me, error, loading } = useMe()

    if (loading) return <p>Loading user...</p>
    if (error !== null) return <p>There was an error while user was loading.</p>

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