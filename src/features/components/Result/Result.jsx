import { Link, useLocation } from 'react-router-dom';
import WheelImage from '../../../common/components/WheelImage';
import { SORRY_YOU_LOSE, YOU_WIN_HUNDRED_USD, YOU_WIN_TEN_USD, YOU_WIN_TWENTY_USD, PLAY_AGAIN } from '../../../common/constants';

function checkWheels({ firstWheel, secondWheel, thirdWheel }) {
    let msg;

    if (firstWheel === undefined && secondWheel === undefined && thirdWheel === undefined) {
        return null
    }

    if (firstWheel !== secondWheel && firstWheel !== thirdWheel && secondWheel !== thirdWheel) {
        msg = SORRY_YOU_LOSE
    }

    if (firstWheel === secondWheel && firstWheel === thirdWheel) {
        msg = YOU_WIN_HUNDRED_USD
    }

    if (firstWheel !== secondWheel && firstWheel === thirdWheel) {
        msg = YOU_WIN_TEN_USD
    }

    if (firstWheel === secondWheel && secondWheel !== thirdWheel) {
        msg = YOU_WIN_TWENTY_USD
    }

    if (firstWheel !== secondWheel && secondWheel === thirdWheel) {
        msg = YOU_WIN_TWENTY_USD
    }

    return (
        <>
            {msg && <>
                    <h1>{msg}</h1>
                    <WheelImage wheels={[firstWheel, secondWheel, thirdWheel]} />
                </>
            }
            
        </>
    );
}

export default function Result({ path }) {
    const location = useLocation();

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
}
