import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "../Components/Firebase";
import { doc, updateDoc } from "firebase/firestore";

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

  const updateStructure = async (e) => {
    e.preventDefault();
    const structureRef = doc(firebase.firestore(), "BusinessStructures", newID);
    const updatedStructure = {
      [e.target.name]: [...structure[e.target.name], e.target.inputField.value],
    };
    console.log(updatedStructure);
    // Set the "capital" field of the city 'DC'
    try {
      const success = await updateDoc(structureRef, updatedStructure);
      setStructure({ ...structure, ...updatedStructure });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="structureDisplay">
        <h1>{structure?.Title}</h1>
        <img src={structure?.img} alt={structure?.Title} className="img"></img>
        <p>{structure?.about}</p>
        <div className="column">
          <h2>Advantages</h2>
          <div>
            {structure?.Advantages.map((advantage) => (
              <ul>{advantage}</ul>
            ))}
          </div>
          <form name="Advantages" onSubmit={updateStructure}>
            <span>
              <input
                type="text"
                className="adding"
                placeholder="Add a advantage"
                id="inputField"
              />
              <input type="submit" value="Submit" />
            </span>
          </form>
        </div>
        <div className="column">
          <h2>Disadvantages</h2>
          <div>
            {structure?.Disadvantages.map((disadvantage) => (
              <ul>{disadvantage}</ul>
            ))}
          </div>
          <form name="Disadvantages" onSubmit={updateStructure}>
            <span>
              <input
                type="text"
                className="adding"
                placeholder="Add a disadvantage"
                id="inputField"
              />
              <input type="submit" value="Submit" />
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default StructureDisplay;
