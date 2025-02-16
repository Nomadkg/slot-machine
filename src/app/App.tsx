import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../common/components/Home';
import GameBoard from '../features/components/SlotMachine';
import Result from '../features/components/Result';
import { HOME_PATH, PLAY_PATH, RESULT_PATH } from '../common/constants';
import './style.css'

export default function App() {
  return (
    <Router>
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path={HOME_PATH} element={<Home />} />
                    <Route path={PLAY_PATH} element={<GameBoard />} />
                    <Route path={RESULT_PATH} element={<Result />} />
                </Routes>
            </header>
        </div>
    </Router>
  );
}

