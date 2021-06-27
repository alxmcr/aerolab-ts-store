import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
    return (
        <>
            <h1>Welcome</h1>
            <Link to="/category">Electronics</Link>
        </>
    )
}