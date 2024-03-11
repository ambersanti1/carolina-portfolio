import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Links from './components/Links'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="contenedor">
      <Header/>
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      {/* <Links/> */}
    </div>
  );
}

export default App;
