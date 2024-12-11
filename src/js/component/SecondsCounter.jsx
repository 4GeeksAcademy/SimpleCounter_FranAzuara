import React from "react";

const SecondsCounter = ({counter, counter2, counter3, counter4}) =>{
    return(
        <div className="row row-cols-7 justify-content-center fs-1 bg-dark">
            <div className="timer text-light col-2"><i className="far fa-clock"></i></div>
            <div className="6Digit text-light col-1">0</div>
            <div className="5Digit text-light col-1">0</div>
            <div className="4Digit text-light col-1">{counter4}</div>
            <div className="3Digit text-light col-1">{counter3}</div>
            <div className="2Digit text-light col-1">{counter2}</div>
            <div className="1Digit text-light col-1">{counter}</div>
        </div>
    )
}

export default SecondsCounter;