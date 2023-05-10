import React from 'react';

const CartlLeft = ({ cart, removeFromCartHandle }) => {
    return (
        <div className='cart'>
            <h2>Order summery: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={()=> removeFromCartHandle(tshirt._id)} >X</button></p>)
            }
        </div>
    );
};

export default CartlLeft;