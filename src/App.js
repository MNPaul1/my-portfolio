import './App.css';
import Home from './components/home/Home';
import Projects from './components/Project/Projects';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Skills from './components/Skiils/Skills';


function App() {
  function Corner(props) {
    return <div className={`container ${props.name}`}></div>
  }

  return (
    <div className="App">
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
