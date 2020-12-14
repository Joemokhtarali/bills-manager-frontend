import './App.css';
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/about"> <About /> </Route>
    </Router>
    <div className="App">
    
    </div>
  );
}

export default App;
