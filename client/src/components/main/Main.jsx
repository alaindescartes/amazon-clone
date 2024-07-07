import React from 'react';
import mainStyles from './Main.module.css';
import {useNavigate} from "react-router-dom";

const Main = () => {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/products');
    }
    return (
        <div className={mainStyles.container}>
            <h1>Welcome to Our Amazing Store</h1>
            <p>Explore top categories and products with incredible offers!</p>
            <button className={mainStyles.cta} onClick={navigateTo}>Shop Now</button>
        </div>
    );
}

export default Main;
