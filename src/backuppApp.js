import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import SignIn from "./components/signIn";
import Terms from "./components/terms";
import Level from "./components/level";
import Category from "./components/category";
import Exercises from "./components/exercises";
import Navigation from "./components/footer";
import Settings from "./components/header";
import Login from "./components/login";
import Register from "./components/register";

const App = () => {
  return (
    <Router>
      <Settings />
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/level" element={<Level />} />
        <Route path="/category" element={<Category />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Navigation />
    </Router>
  );
};

//export default App;
