import React, { useState } from 'react';
import {Blocks} from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function LoaderEcom() {
    

    return (
        <div>
            
                <div style={{ textAlign: 'center' }}>
                    <Blocks type="TailSpin" color="#00BFFF" height={50} width={50} />
                </div>
           
        </div>
    );
}

export default LoaderEcom;
