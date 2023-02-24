import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router , Routes, Route  } from "react-router-dom"; 
import Sign_in from "./sign_in";
import Terms from "./terms";
import Level from "./level";
import Category from "./category";

//import Terms from "./terms";
//import './terms.css';




/*Displays sign in page, work-in-progress trying to figure out how to use on-click events or use different forms of it.
  Might need to figure out different ways of making stuff required in forms. Since buttons with links are no longer working
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
        <Route exact path="/" element={<Sign_in />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/level" element={<Level />} />
        <Route path="/category" element={<Category />} />
    </Routes>
  </Router>
);
/*root.render(
  
    <Sign_in />,
    <Terms />
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
