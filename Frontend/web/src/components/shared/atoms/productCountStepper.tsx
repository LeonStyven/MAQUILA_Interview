import React, { useState } from "react";

const ProductCountStepper : React.FC<{minValue: number, maxValue: number}> = ({minValue = 1, maxValue = 5}) => {

    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if(count < maxValue) {
            setCount ((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if(count > minValue) {
            setCount ((prevState) => prevState - 1);
        }
    };


    return(
        <div style={{
            border: '1px, solid #e3e4e6',
            transition: 'border 0.3s ease'
        }} className="btn-group flex rounded-sm w-30 align-middle overflow-hidden py-1">
            
            <button className="decrement-btn cursor-pointer border-r-1 border-[#e3e4e6] w-1/3" onClick={handleDecrementCounter}>
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#727273"><path d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/></svg>
            </button>

            <p className="inline-block content-center w-1/3 text-center">{count}</p>

            

            <button className="increment-btn place-content-center cursor-pointer border-l-1 border-[#e3e4e6] w-1/3" onClick={handleIncrementCounter}>
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#727273"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg>
            </button>
        </div>
    );
};

export default ProductCountStepper