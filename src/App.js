import './App.css';
import Home from './components/home/Home';
import Projects from './components/Project/Projects';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Skills from './components/Skiils/Skills';
import { Close} from '@mui/icons-material';

function App() {
  function Corner(props) {
    return <div className={`container ${props.name}`}></div>
  }

  return (
    <div className="App">

    <div className="popup center">
      <nav className='mail center'>Email - mnpaul426@gmail.com</nav>
    <button className='close-btn' onClick={() =>(
      document.getElementsByClassName("popup")[0].style.display = "none"
    )}>
      <Close />
    </button>
    </div>
      <div className="main-container center">
        <Corner name="container_1" />
        <Corner name="container_2" />
        <div className="inner-container center">
        <Router>
        <Navbar />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          </Routes>
        </Router>
        </div>
      </div>
    </div>
  );
}
export {}
export default App;
