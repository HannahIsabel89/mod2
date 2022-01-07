import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About'
import StructurePage from './Pages/StructurePage';
import firebase from './Components/Firebase';

function App() {

// get and set state 
const ref = firebase.firestore().collection("BusinessStructures");
//console.log(ref)

const [structures, setStructures] = useState([]);

// pushing data into state method
function getData() {
  ref.onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setStructures(items);
  });
}

const data = {structures}

console.log(data)


// calling the method above
useEffect(() => {
  getData();
}, []);  

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/structures" render={routerProps => <StructurePage {...routerProps} structure={this.structures} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
