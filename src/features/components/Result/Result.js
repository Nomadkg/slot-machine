import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WheelImage from '../../../common/components/WheelImage';
import { SORRY_YOU_LOSE, YOU_WIN_HUNDRED_USD, YOU_WIN_TEN_USD, YOU_WIN_TWENTY_USD, PLAY_AGAIN } from '../../../common/constants';
import './result.scss';

const checkWheels = ({ firstWheel, secondWheel, thirdWheel }) => {
    const conditions = {
        [firstWheel === undefined && secondWheel === undefined && thirdWheel === undefined]: null,
        [firstWheel === secondWheel && firstWheel === thirdWheel]: YOU_WIN_HUNDRED_USD,
        [firstWheel !== secondWheel && secondWheel === thirdWheel]: YOU_WIN_TWENTY_USD,
        [firstWheel === secondWheel && secondWheel !== thirdWheel]: YOU_WIN_TWENTY_USD,
        [firstWheel !== secondWheel && firstWheel === thirdWheel]: YOU_WIN_TEN_USD,
        [firstWheel !== secondWheel && firstWheel !== thirdWheel && secondWheel !== thirdWheel]: SORRY_YOU_LOSE
    };

    const matchedCondition = Object.keys(conditions).find(condition => condition);

    const message = conditions[matchedCondition];
    
    return (
        <>
            {message && <h2>{message}</h2>}
            <WheelImage wheels={[firstWheel, secondWheel, thirdWheel]} />
        </>
    );
};

const Result = ({ path }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='result-container'>
            <div>
                {checkWheels(location.state)}
            </div>
            <p>
                <span><Link to={path}>{PLAY_AGAIN}</Link></span>
            </p>
        </div>
    );
};

export default Result;
