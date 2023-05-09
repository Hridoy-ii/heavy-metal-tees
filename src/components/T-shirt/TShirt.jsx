import React from 'react';

const TShirt = ({tshirt}) => {
    const {picture, name, price, gender} = tshirt;
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default TShirt;