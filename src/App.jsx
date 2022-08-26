import SignUp from "./components/SignUp";
import rocketImg from "./assest/rocket.png";

import "./App.css";

function App() {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-7">
          {" "}
          <SignUp />
        </div>
        <div className="col-md-5">
          <img className="img-fluid" src={rocketImg} alt="Not found"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
