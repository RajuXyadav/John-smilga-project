import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false)
 
  return <div>
    <button className="btn" onClick={()=>setValue(!value)}>toggle</button>
       {value &&<ShowValueComponent />}
  </div>;

};

const ShowValueComponent = ({ value }) => {
  return <div className="alert alert-danger">
        Hello world
  </div>

}
export default ToggleChallenge;
