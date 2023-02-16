import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ActivePage from "./components/activePage";

const App = () => {
  return (
      <Router>
        <Header />
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
