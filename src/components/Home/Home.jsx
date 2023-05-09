import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../T-shirt/TShirt';
import CartlLeft from '../CartLeft/CartlLeft';

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <CartlLeft></CartlLeft>
            </div>
        </div>
    );
};

export default Home;