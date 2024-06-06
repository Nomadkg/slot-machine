import React from 'react';
import { Link } from 'react-router-dom';
import { SORRY_YOU_LOSE, YOU_WIN_HUNDRED_USD, YOU_WIN_TEN_USD, YOU_WIN_TWENTY_USD, PLAY_AGAIN } from '../../constants';
import './result.scss';

const renderImage = (firstWheel, secondWheel, thirdWheel) => {
    return (
        <div className='wheels-container'>
            <div id='wheel-wrapper'>
                <img src={require(`../../assets/img/${firstWheel}`)} alt="" width="192" height="192"/>
            </div>
            <div id='wheel-wrapper'>
                <img src={require(`../../assets/img/${secondWheel}`)} alt="" width="192" height="192"/>
            </div> 
            <div id='wheel-wrapper'>
                <img src={require(`../../assets/img/${thirdWheel}`)} alt="" width="192" height="192"/>
            </div>
        </div>
    )
};

const check = ({firstWheel, secondWheel, thirdWheel}) => {
    if (firstWheel === undefined && secondWheel === undefined && thirdWheel === undefined) {
        return null
    }

    if (firstWheel === secondWheel && firstWheel === thirdWheel) {
        return (
            <div>
                <h2>{YOU_WIN_HUNDRED_USD}</h2>
                {renderImage(firstWheel, secondWheel, thirdWheel)}
            </div>
        )
    }

    if (firstWheel !== secondWheel && secondWheel === thirdWheel) {
        return (
            <div>
                <h2>{YOU_WIN_TWENTY_USD}</h2>
                {renderImage(firstWheel, secondWheel, thirdWheel)}
            </div>
        )
    }

    if (firstWheel === secondWheel && secondWheel !== thirdWheel) {
        return (
            <div>
                <h2>{YOU_WIN_TWENTY_USD}</h2>
                {renderImage(firstWheel, secondWheel, thirdWheel)}
            </div>
        )
    }

    if (firstWheel !== secondWheel && firstWheel === thirdWheel) {
        return (
            <div>
                <h2>{YOU_WIN_TEN_USD}</h2>
                {renderImage(firstWheel, secondWheel, thirdWheel)}
            </div>
        )
    }

    if (firstWheel !== secondWheel && firstWheel !== thirdWheel && secondWheel !== thirdWheel) {
        return (
            <div>
                <h2>{SORRY_YOU_LOSE}</h2>
                {renderImage(firstWheel, secondWheel, thirdWheel)}
            </div>
        )
    }
};

const Result = (props) => {
    const { path, location } = props;
    return (
        <div className='result-container'>
            <div>
                {check(location)}
            </div>
            <p>
                <span><Link to={path}>{PLAY_AGAIN}</Link></span>
            </p>
        </div>
    )
};

export default Result;
