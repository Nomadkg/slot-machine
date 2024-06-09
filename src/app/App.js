import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from '../features/components/Spinner';
import Home from '../common/components/Home';
import Result from '../features/components/Result';
import './App.scss';

export default function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/play" element={<Spinner />} />
                        <Route path="/result" element={<Result path="/" />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
};
