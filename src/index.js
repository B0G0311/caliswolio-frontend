import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router , Routes, Route  } from "react-router-dom"; 
import SignIn from "./components/signIn";
import Terms from "./components/terms";
import Level from "./components/level";
import Category from "./components/category";
import Exercises from "./components/exercises";

/*Displays sign in page, work-in-progress trying to figure out how to use on-click events or use different forms of it.
  Might need to figure out different ways of making stuff required in forms. Since buttons with links are no longer working
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/level" element={<Level />} />
        <Route path="/category" element={<Category />} />
        <Route path="/exercises" element = {<Exercises />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();