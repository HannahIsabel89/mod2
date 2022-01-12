import React from "react";
import firebase from '../Components/Firebase';
import { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom'


function StructurePage() {
    const ref = firebase.firestore().collection("BusinessStructures");
    //console.log(ref)
  
    const [data, setData] = useState([]);
  
    // pushing data into state method
    function getData() {
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setData(items);
      });
    }
  
    // calling the method above
    useEffect(() => {
      getData();
    }, []); 
  
    return (
      <>
        <h1>Business Structures</h1>
        <p>
          Click on a business structure below to brainstorm the advantages and
          disadvantages of each.
        </p>
        {data.map((structure) => (
            <div id={structure.id} key={structure.id} className="home">
            <Link to={`/structures/${structure.Title}`}><h2>{structure.Title}</h2></Link>
            <img src={structure.img} alt={structure.Title} className="img" id={structure.id}/>
          </div>
          ))}
      </>
    );
}

export default StructurePage;
