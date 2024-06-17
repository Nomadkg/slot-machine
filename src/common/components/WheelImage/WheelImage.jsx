import { IMAGE_CONFIG } from '../../constants';
import { getImageURL } from '../../../features/utils';
import './style.scss'

export default function WheelImage({ wheels }) {
    return (
        <div className='wheels-container'>
            {wheels.map((wheel, index) => (
                <div key={`${wheel}-${index}`} className='wheel-wrapper'>
                    <img src={getImageURL(wheel)} alt="" width={IMAGE_CONFIG.width} height={IMAGE_CONFIG.height}/>
                </div>
            ))}
        </div>
    );
}
