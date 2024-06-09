import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRandomItem, startTimer } from '../../utils';
import { START, STOP, SLOT_MACHINE } from '../../../common/constants';
import SpinnerImage from '../../../common/components/SpinnerImage';
import './spinner.scss'

// Function to get random wheels
const getWheels = () => ({
    firstWheel: getRandomItem(),
    secondWheel: getRandomItem(),
    thirdWheel: getRandomItem(),
});

const Spinner = () => {
    const [spin, setSpin] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const startButtonRef = useRef(null);
    const stopButtonRef = useRef(null);
    const timerRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timerRef.current = startTimer(startSpin, 5000);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setSpin(false);
            setDisabled(true);
        };
    }, []);

    const startSpin = () => {
        setSpin(true);
        setDisabled(false);
        timeoutRef.current = startTimer(() => {
            redirectToResult(getWheels());
        }, 10000);
    };

    const stopSpin = () => {
        redirectToResult(getWheels());
        setSpin(false);
        setDisabled(true);
    };

    const redirectToResult = (result) => {
        navigate('/result', { state: result });
    };

    return (
        <div className="control">
            <div className="box">
                <h1 className="slot-machine-title">{SLOT_MACHINE}</h1>
                <SpinnerImage spin={spin} />
                <button ref={startButtonRef} disabled={!disabled} onClick={startSpin}>{START}</button>
                <button ref={stopButtonRef} disabled={!spin} onClick={stopSpin}>
                    <Link to="/result">{STOP}</Link>
                </button>
            </div>
        </div>
    );
};

export default Spinner;

