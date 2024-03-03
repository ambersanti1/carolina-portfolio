import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Links from './components/Links'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
        <Links/>
      </BrowserRouter>
    </div>
  );
}

export default App;
