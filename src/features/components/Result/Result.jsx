import { Link, useLocation } from 'react-router-dom';
import WheelImage from '../../../common/components/WheelImage';
import { SORRY_YOU_LOSE, YOU_WIN_HUNDRED_USD, YOU_WIN_TEN_USD, YOU_WIN_TWENTY_USD, PLAY_AGAIN } from '../../../common/constants';


function returnResult(msg, {firstWheel, secondWheel, thirdWheel}) {
    return (
        <>
            <h1>{msg}</h1>
            <WheelImage wheels={[firstWheel, secondWheel, thirdWheel]} />
        </>
    );
}

function checkWheels({ firstWheel, secondWheel, thirdWheel }) {
    if (firstWheel === undefined && secondWheel === undefined && thirdWheel === undefined) {
        return null
    }

    if (firstWheel !== secondWheel && firstWheel !== thirdWheel && secondWheel !== thirdWheel) {
        return returnResult(SORRY_YOU_LOSE, { firstWheel, secondWheel, thirdWheel })
    }

    if (firstWheel === secondWheel && firstWheel === thirdWheel) {
        return returnResult(YOU_WIN_HUNDRED_USD, { firstWheel, secondWheel, thirdWheel })
    }

    if (firstWheel !== secondWheel && firstWheel === thirdWheel) {
        return returnResult(YOU_WIN_TEN_USD, { firstWheel, secondWheel, thirdWheel })
    }

    if (firstWheel === secondWheel && secondWheel !== thirdWheel) {
        return returnResult(YOU_WIN_TWENTY_USD, { firstWheel, secondWheel, thirdWheel })
    }

    if (firstWheel !== secondWheel && secondWheel === thirdWheel) {
        return returnResult(YOU_WIN_TWENTY_USD,{ firstWheel, secondWheel, thirdWheel })
    }
}

export default function Result({ path }) {
    const { state } = useLocation();

    return (
        <div className='result-container'>
            <div>
                {checkWheels(state)}
            </div>
            <p>
                <span><Link to={path}>{PLAY_AGAIN}</Link></span>
            </p>
        </div>
    );
}
