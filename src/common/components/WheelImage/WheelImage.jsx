import { IMAGE_CONFIG, IMAGE_PATH } from '../../constants';
import { getImages } from '../../../features/utils';
import './style.scss'

export default function WheelImage({ wheels }) {
    return (
        <div className='wheels-container'>
            {wheels.map((wheel, index) => (
                <div key={`${wheel}-${index}`} className='wheel-wrapper'>
                    <img src={getImages(wheel, IMAGE_PATH)} alt="" width={IMAGE_CONFIG.width} height={IMAGE_CONFIG.height}/>
                </div>
            ))}
        </div>
    );
}
