import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Footer from "./components/footer";
import ActivePage from "./components/activePage";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path ="/" element={
            <ActivePage />
          }>
          </Route>
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
