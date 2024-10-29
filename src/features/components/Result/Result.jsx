import { Link, useLocation } from 'react-router-dom';
import ReelImage from '../../../common/components/ReelImage';
import { checkReels } from '../../utils';
import { PLAY_AGAIN } from '../../../common/constants';


export default function Result({ path }) {
    const { state } = useLocation();

    function render({firstReel, secondReel, thirdReel}) {
        const msg = checkReels({firstReel, secondReel, thirdReel})
    
        if (!msg) return
    
        return (
            <>
                <h1>{msg}</h1>
                <ReelImage reels={[firstReel, secondReel, thirdReel]} />
            </>
        );
    }

    return (
        <div className='result-container'>
            <div>
                {render(state)}
            </div>
            <p>
                <span><Link to={path}>{PLAY_AGAIN}</Link></span>
            </p>
        </div>
    );
}
