import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "../Components/Firebase";

const StructureDisplay = () => {
  const { structureID } = useParams();
  let newID = structureID.replace(/ /g, "");
  //console.log(newID)
  const [structure, setStructure] = useState(null);

  useEffect(() => {
    const structureRef = firebase
      .firestore()
      .collection("BusinessStructures")
      .doc(newID);

    structureRef.get().then((doc) => {
      if (doc.exists) {
        setStructure(doc.data());
        console.log("Document data:", doc.data());
      }
    });
  }, []);

  return (
    <>
      <h1>{structure?.Title}</h1>
      <div className="structureDisplay">
        <img src={structure?.img} alt={structure?.Title} className="img"></img>
      </div>
      <h3>{structure?.about}</h3>

      <div classname="column">
        <h2>Advantages</h2>
        <div>
          {structure?.Advantages.map((advantage) => (
            <li>{advantage}</li>
          ))}
        </div>
        <form onSubmit={console.log("Submit button pressed")}>
          <span>
            <input
              type="text"
              className="adding"
              placeholder="Add a advantage"
            />
            <input type="submit" value="Submit" />
          </span>
        </form>
      </div>
      <div classname="column">
        <h2>Disadvantages</h2>
        <div>
          {structure?.Disadvantages.map((disadvantage) => (
            <li>{disadvantage}</li>
          ))}
        </div>
        <form onSubmit={console.log("Submit button pressed")}>
          <span>
            <input
              type="text"
              className="adding"
              placeholder="Add a disadvantage"
            />
            <input type="submit" value="Submit" />
          </span>
        </form>
      </div>
    </>
  );
};

export default StructureDisplay;
