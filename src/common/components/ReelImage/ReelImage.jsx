import { IMAGE_CONFIG, IMAGE_PATH } from '../../constants';
import { getImages } from '../../../features/utils';
import './style.scss'

export default function ReelImage({ reels }) {
    return (
        <div className='reels-container'>
            {reels.map((reel, index) => (
                <div key={`${reel}-${index}`} className='reel-wrapper'>
                    <img src={getImages(reel, IMAGE_PATH)} alt="" width={IMAGE_CONFIG.width} height={IMAGE_CONFIG.height}/>
                </div>
            ))}
        </div>
    );
}
