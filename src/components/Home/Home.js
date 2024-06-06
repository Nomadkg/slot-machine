import React from 'react';
import { Link } from 'react-router-dom';
import { PLAY, WELCOME } from '../../constants';

export default function Home() {
    return (
        <div className="home-container">
            <h2>{WELCOME}</h2>
            <button><Link to="/play">{PLAY}</Link></button>
        </div>
    )
}
