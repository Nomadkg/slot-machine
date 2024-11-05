import { Link } from 'react-router-dom';
import { PLAY, WELCOME, PLAY_PATH } from '../../constants';

export default function Home() {
    return (
        <div className="home-container">
            <h1>{WELCOME}</h1>
            <button><Link to={PLAY_PATH}>{PLAY}</Link></button>
        </div>
    )
}
