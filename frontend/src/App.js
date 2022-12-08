// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./pages/form/form";
import About from "./pages/about/about.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Jobs' element={<Jobs />}></Route> */}
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
