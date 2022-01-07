import "../../src/App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        <div>
          <h3>Pick a topic below to collaborate with others.</h3>
          <Link to="/structures" className="topics">Business Structures</Link>
        </div>
    </>
  );
}

export default Home;