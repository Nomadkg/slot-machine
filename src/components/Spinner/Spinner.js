import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTimeout from 'react-timeout'
import { getRandomItem, startTimer } from '../../utils';
import { START, STOP, SLOT_MACHINE } from '../../constants';
import SpinnerImage from '../SpinnerImage';
import './spinner.scss'

class Spinner extends Component {
    state = {
        spin: false,
        disabled: true
    };

    componentDidMount() {
        startTimer(this.start, 5000)
    }

    start = () => {
        this.setState({
            spin: true,
            disabled: false
        });
        return this.props.setTimeout( () => {
            this.sendResult(this.getResult());
            }, 10000
        )
    };

    getResult = () => {
        return {
            firstWheel: getRandomItem(),
            secondWheel: getRandomItem(),
            thirdWheel: getRandomItem(),
        }
    };

    stop = () => {
        this.sendResult(this.getResult());
        return this.setState({spin: false});
    };

    sendResult(result) {
        const { history } = this.props;
        const newPath = `/result`;
        history.push(newPath);
        history.push(result);
    }

    render() {
        const { spin, disabled } = this.state;
        return (
            <div className="control">
                <div className="box">
                    <h1 className="slot-machine-title">{SLOT_MACHINE}</h1>
                    <SpinnerImage spin={spin} />
                    <button ref='button' disabled={!disabled} onClick={this.start}>{START}</button>
                    <button ref='button' disabled={!spin} onClick={this.stop}>
                        <Link to="/result">{STOP}</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default ReactTimeout(Spinner);
