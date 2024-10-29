import { Link, useLocation } from 'react-router-dom';
import ReelImage from '../../../common/components/ReelImage';
import { SORRY_YOU_LOSE, YOU_WIN_HUNDRED_USD, YOU_WIN_TEN_USD, YOU_WIN_TWENTY_USD, PLAY_AGAIN } from '../../../common/constants';


function returnResult(msg, {firstReel, secondReel, thirdReel}) {
    return (
        <>
            <h1>{msg}</h1>
            <ReelImage reels={[firstReel, secondReel, thirdReel]} />
        </>
    );
}

function checkReels({ firstReel, secondReel, thirdReel }) {
    if (firstReel === undefined && secondReel === undefined && thirdReel === undefined) {
        return null
    }

    if (firstReel !== secondReel && firstReel !== thirdReel && secondReel !== thirdReel) {
        return returnResult(SORRY_YOU_LOSE, { firstReel, secondReel, thirdReel })
    }

    if (firstReel === secondReel && firstReel === thirdReel) {
        return returnResult(YOU_WIN_HUNDRED_USD, { firstReel, secondReel, thirdReel })
    }

    if (firstReel !== secondReel && firstReel === thirdReel) {
        return returnResult(YOU_WIN_TEN_USD, { firstReel, secondReel, thirdReel })
    }

    if (firstReel === secondReel && secondReel !== thirdReel) {
        return returnResult(YOU_WIN_TWENTY_USD, { firstReel, secondReel, thirdReel })
    }

    if (firstReel !== secondReel && secondReel === thirdReel) {
        return returnResult(YOU_WIN_TWENTY_USD,{ firstReel, secondReel, thirdReel })
    }
}

export default function Result({ path }) {
    const { state } = useLocation();

    return (
        <div className='result-container'>
            <div>
                {checkReels(state)}
            </div>
            <p>
                <span><Link to={path}>{PLAY_AGAIN}</Link></span>
            </p>
        </div>
    );
}
