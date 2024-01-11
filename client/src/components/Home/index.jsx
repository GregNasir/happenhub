// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Slider from '../Slider/slider';
import './index.scss';

const Home = () => {


    const isAuthenticated = true; // Replace with your actual authentication logic.
    const userlastName = ""; // Replace with the user's name from your state.
    // const Location=useLocation();
    

    return (

            <div className='container' id='home-page'>
            {/* <div className='site-title'>
                <h1>HappenHub </h1>
                <div className='site-description'>
                <p>Find the best events in your area!</p> */}
                {/* <h2>Hello {Location.state.id} and welcome to HappenHub</h2> */}
                {/* {isAuthenticated ? (
                        <h2>Hello {userlastName} and welcome to HappenHub</h2>
                    ) : (
                        <p>Please log in to see personalized content.</p>
                    )} */}
            {/* </div> */}
            {/* </div > */}
            
            <Slider />
           
            {/* <div className='back-img'>
            </div> */}
            </div>
    );
};
export default Home;