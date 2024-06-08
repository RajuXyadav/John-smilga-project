import { useEffect, useState } from "react";


const CleanupFunction = () => {
  const [toggle,seToggle] = useState(false);
  console.log('render')
  return (
     <div>
      <button className="btn" onClick={()=>seToggle(!toggle)}>toggle component</button>
      {toggle && <RenderComponent/>}
     </div>
  );
};
const RenderComponent=()=>{
  useEffect(()=>{
      const intId = setInterval(()=>{
        console.log('hello from interval')
      },1000)
      return()=>{
         clearInterval(intId)
      }
  },[])
   return <div>
         <h2>Hello cleanup function</h2>
   </div>
}
export default CleanupFunction;
