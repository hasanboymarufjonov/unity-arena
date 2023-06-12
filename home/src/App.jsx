import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Games from "./components/Games";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router>
        <Route path="/signin" component={SignIn} />
      </Router>
      <Navbar />
      <Hero />
      <TechStack />
      <Games />
      <Footer /> */}

      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <TechStack />
                <Games />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
