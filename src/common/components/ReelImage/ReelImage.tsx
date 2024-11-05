import { getImages } from '../../../features/utils';
import { IMAGE_CONFIG, IMAGE_PATH } from '../../constants';
import { ReelImageProps } from '../../types';
import './style.css'

export default function ReelImage({ reels }: ReelImageProps) {
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
