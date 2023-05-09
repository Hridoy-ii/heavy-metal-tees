import React from 'react';
import './Tshirt.css';

const TShirt = ({tshirt}) => {
    const {picture, name, price, gender} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button>Buy Me</button>
        </div>
    );
};

export default TShirt;