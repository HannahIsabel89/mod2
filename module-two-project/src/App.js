import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About'
import StructurePage from './Pages/StructurePage';
import StructureDisplay from './Components/StructureDisplay';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/structures" component={StructurePage} />
          <Route path="/structures/:structureID" component={StructureDisplay} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
