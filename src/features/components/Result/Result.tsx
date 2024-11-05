import { Link, useLocation } from 'react-router-dom';
import ReelImage from '../../../common/components/ReelImage';
import { checkReels } from '../../utils';
import { PLAY_AGAIN, HOME_PATH } from '../../../common/constants';
import { Reels } from '../../../common/types';


export default function Result() {
    const { state } = useLocation();

    function render({firstReel, secondReel, thirdReel}: Reels) {
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
                <span><Link to={HOME_PATH}>{PLAY_AGAIN}</Link></span>
            </p>
        </div>
    );
}
