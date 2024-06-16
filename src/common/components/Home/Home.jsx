import { Link } from 'react-router-dom';
import { PLAY, WELCOME } from '../../constants';

export default function Home() {
    return (
        <div className="home-container">
            <h1>{WELCOME}</h1>
            <button><Link to="/play">{PLAY}</Link></button>
        </div>
    )
}
