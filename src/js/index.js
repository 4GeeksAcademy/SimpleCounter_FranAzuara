//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = -1;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
setInterval(() =>{
    if (counter == 9) {
        counter2++;
        counter = -1;
        if (counter2 == 9) {
            counter3++;
            counter2=0;
            if (counter3 == 9) {
                counter4++;
                counter3=0;
            }
        }
    }
    counter++;
ReactDOM.createRoot(document.getElementById('app')).render(<Home counter = {counter} counter2={counter2} counter3={counter3} counter4={counter4}/>);
},1000);
