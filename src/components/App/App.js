import React from 'react';
import './App.scss';
import Spinner from "../Spinner";
import Home from "../Home"
import Result from "../Result";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Route path="/" exact component={Home}/>
                    <Route path="/play" exact component={Spinner}/>
                    <Route path="/result" render={({history}) => {
                        const {location} = history;
                        return <Result path='/' location={location}/>
                    }}/>
                </header>
            </div>
        </Router>
    );
};

export default App;
