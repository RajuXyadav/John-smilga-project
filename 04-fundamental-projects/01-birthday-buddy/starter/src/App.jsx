import { useState } from 'react';
import value from './data';
const App = () => {
  const [data,setData] = useState(value)

  const handlerFunction = ()=>{
     setData([])
  }
  const removeHandlerFunction = (id)=>{
    console.log(id)
      const removeItem =  data.filter((person)=> person.id !==id)
      setData(removeItem)
  }
  return <div>
     <div className='form'>
      <h2>Birthday Reminder</h2>
      <div className='section'>
      {data.map((person)=>{
        
        return <div className='person' key={person.id}>
             <img src={person.image} alt="./assets/img/shiva.png" />
             <h4>{person.name}</h4>
             
             <button className='btn' onClick={()=>removeHandlerFunction(person.id)}>
              remove
              {console.log(person.id)}
              </button>
        </div>
      })}

      </div>
      <button className='btn' onClick={handlerFunction}>clear All</button>
     </div>
  </div>;
};
export default App;
