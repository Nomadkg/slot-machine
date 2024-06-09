import React from 'react';
import { IMAGE_CONFIG } from '../../constants';
import './wheels.scss'

export default function WheelImage({ wheels }) {
    return (
        <div className='wheels-container'>
            {wheels.map((wheel, index) => (
                <div key={`${wheel}-${index}`} className='wheel-wrapper'>
                    <img src={require(`../../assets/img/${wheel}`)} alt="" width={IMAGE_CONFIG.width} height={IMAGE_CONFIG.height}/>
                </div>
            ))}
        </div>
    );
};

