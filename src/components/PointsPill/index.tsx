import coin from 'assets/icons/coin.svg'
import { PointsPillProps } from "componentsTypes"
import './PointsPill.css'

export const PointsPill = ({ children, variant = '' }: PointsPillProps) => {
    return (
        <div className={`pill ${variant}`}>
            <p className="pill__value">{children}</p>
            <img
                src={coin}
                alt="Coin"
                className="pill__icon pill__icon--coin"
            />
        </div>
    )
}