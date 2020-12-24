import './App.css';
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/about"> <About /> </Route>
    </Router>

    
    </div>
  );
}

export default App;
