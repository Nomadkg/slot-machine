import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container">
            <h2>Welcome!</h2>
            <button><Link to="/play">PLAY</Link></button>
        </div>
    )
};

export default Home;