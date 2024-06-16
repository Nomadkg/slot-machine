import { IMAGE_CONFIG } from '../../constants';
import './style.scss'

export default function WheelImage({ wheels }) {
    return (
        <div className='wheels-container'>
            {wheels.map((wheel, index) => (
                <div key={`${wheel}-${index}`} className='wheel-wrapper'>
                    <img src={require(`../../assets/images/${wheel}`)} alt="" width={IMAGE_CONFIG.width} height={IMAGE_CONFIG.height}/>
                </div>
            ))}
        </div>
    );
}
