import React from 'react';
import { Link } from 'react-router-dom';
import './result.scss';

const check = ({first_wheel, second_wheel, third_wheel}) => {

    if (first_wheel === undefined && second_wheel === undefined && third_wheel === undefined) {
        return (
            <div></div>
        )
    }

    if (first_wheel === second_wheel && first_wheel === third_wheel) {
        return (
            <div>
                <h2>You win $100!!!</h2>
                <div>
                    {first_wheel}--
                    {second_wheel}--
                    {third_wheel}
                </div>
            </div>
        )
    }

    if (first_wheel !== second_wheel && second_wheel === third_wheel) {
        return (
            <div>
                <h2>You win $20!!!</h2>
                <div>
                    {first_wheel}--
                    {second_wheel}--
                    {third_wheel}
                </div>
            </div>
        )
    }

    if (first_wheel === second_wheel && second_wheel !== third_wheel) {
        return (
            <div>
                <h2>You win $20!!!</h2>
                <div>
                    {first_wheel}--
                    {second_wheel}--
                    {third_wheel}
                </div>
            </div>
        )
    }

    if (first_wheel !== second_wheel && first_wheel === third_wheel) {
        return (
            <div>
                <h2>You win $10!!!</h2>
                <div>
                    {first_wheel}--
                    {second_wheel}--
                    {third_wheel}
                </div>
            </div>
        )
    }

    if (first_wheel !== second_wheel && first_wheel !== third_wheel && second_wheel !== third_wheel ) {
        return (
            <div>
                <h2>Sorry you lose!</h2>
                <div>
                    {first_wheel}--
                    {second_wheel}--
                    {third_wheel}
                </div>
            </div>
        )
    }
};

const Result = (props) => {
    const { path, location } = props;
    return (
        <div className='result-container'>
            <div>
                {check(location)}
            </div>
            <p>
                <span><Link to={path}>Play again?</Link></span>
            </p>
        </div>
    )
};

export default Result;