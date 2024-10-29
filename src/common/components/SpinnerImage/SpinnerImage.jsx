import reel from "../../assets/images/reel_v2.png";
import { spins } from '../../constants';

export default function SpinnerImage({ spin }) {
    return (
        <div className="spinner-container">
            {spins.map((spinClass, index) => (
                <span className="spinner-wrapper" key={`${spinClass}-${index}`}>
                    <img src={reel} className={spin ? spinClass : ''} alt="" width="90%" height="80%" />
                </span>
            ))}
        </div>
    );
}
