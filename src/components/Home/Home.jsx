import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../T-shirt/TShirt';

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
            {
                tShirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                ></TShirt>)
            }
        </div>
    );
};

export default Home;