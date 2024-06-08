import { useState } from "react";

const ErrorExample = () => {
const [count , setCount] = useState(0);
   
  const handlerClick = ()=>{
      setCount(count+1)
  }

  return <div>
    <h2>{count}</h2> 
    <button type="button" onClick={handlerClick} className="btn">Increase</button>
  </div>;
};

export default ErrorExample;
