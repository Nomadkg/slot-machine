import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import spinner from "./spinner.png";
import './spinner.scss'
import Items from '../../constants/Items';


class Spinner extends Component {
    _isMounted = false;
    timer = null;
    state = {
        spin: false,
        disabled: true
    };
    componentDidMount() {
        this._isMounted = true;
        this.timer = setTimeout(() => {
            if (this._isMounted) {
                this.start()
            }
        }, 5000);

    }
    componentWillUnmount() {
        this._isMounted = false;
        clearTimeout(this.timer);

    }

    autoRun = () => {
        const timer = setTimeout(() => {
            this.start()
        }, 3000);
        return () => clearTimeout(timer);
    };

    check = () => {
        if (this.state.spin === true) {

        }
    };

    start = () => {
        this.setState({
            spin: true,
            disabled: false
        });

        return setTimeout(() => {
            const result = this.getResult();
            this.sendResult(result);
            }, 10000
        )
    };

    getResult = () => {
        return {
            first_wheel: Items[Math.floor(Math.random() * Items.length)],
            second_wheel: Items[Math.floor(Math.random() * Items.length)],
            third_wheel: Items[Math.floor(Math.random() * Items.length)],
        }
    };

    stop = () => {
        const result = this.getResult();
        this.sendResult(result);
        return this.setState({spin: false});
    };

    sendResult(result) {
        const { history } = this.props;
        const newPath = `/result`;
        history.push(newPath);
        history.push(result);
    }

    renderSpinner = (spin) => {
        return (
            <div className="spinner-container">
                <span className="spinner-wrapper">
                    <img src={spinner} className={spin ? 'first_spin' : ''} alt="" width="192" height="192"/>
                </span>
                <span className="spinner-wrapper">
                    <img src={spinner} className={spin ? 'second_spin' : ''} alt="" width="192" height="192"/>
                </span>
                <span className="spinner-wrapper">
                    <img src={spinner} className={spin ? 'third_spin' : ''} alt="" width="192" height="192"/>
                </span>
            </div>
        )
    };

    render() {
        const { spin } = this.state;
        return (
            <div className="control">
                <button ref='button' disabled={!this.state.disabled} onClick={this.start}>START</button>
                <button ref='button' disabled={!this.state.spin} onClick={this.stop}>
                    <Link to="/result">STOP</Link>
                </button>
                <br/>
                <br/>
                <br/>
                {this.renderSpinner(spin)}
            </div>
        )
    }
}

export default Spinner;