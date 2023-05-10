import React from 'react';
import './Tshirt.css';

const TShirt = ({ tshirt, buymeAddtoCart }) => {
    const {picture, name, price, gender} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => buymeAddtoCart(tshirt)}>Buy Me</button>
        </div>
    );
};

export default TShirt;