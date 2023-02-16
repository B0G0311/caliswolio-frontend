import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SignIn from "./components/signIn";
import WorkoutProvider from "./context/workoutContext";

const App = () => {
  const { activePage } = useContext(WorkoutProvider);

  return (
    <WorkoutProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path ="/" element={
            <div>
              {activePage === 'SignIn' && <SignIn />}
            </div>
          }>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </WorkoutProvider>
  );
};

export default App;
