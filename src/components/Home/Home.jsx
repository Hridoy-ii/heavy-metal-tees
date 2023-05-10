import React, { useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../T-shirt/TShirt';
import CartlLeft from '../CartLeft/CartlLeft';
import toast  from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const buymeAddtoCart = tshirt => {
        const isExist = cart.find(ts => ts._id === tshirt._id);
        if (isExist){
            toast('Already added this TeeS');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const removeFromCartHandle = id => {
        const remainingT = cart.filter(tShirt => tShirt._id !== id)
        console.log(remainingT);
        setCart(remainingT)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        buymeAddtoCart={buymeAddtoCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <CartlLeft
                    cart={cart}
                    key={cart._id}
                    removeFromCartHandle={removeFromCartHandle}
                ></CartlLeft>
            </div>
        </div>
    );
};

export default Home;