import { useState } from "react";
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id)=>{
    const newPeople = people.filter((person)=>person.id !==id)
     console.log(newPeople)
     setPeople(newPeople)
  }

  const clearAllItems = ()=>{
     setPeople([])
  }



  return <div>
    {people.map((person) => {
      const { id, name } = person
      // console.log(people)
      return <div key={id}>
        <h4 >{name}</h4>
        <button onClick={()=>removeItem(id)}>clear</button>
      </div>

    })}
    <button className="btn" style={{marginTop:'2rem'}} onClick={clearAllItems}>clear items</button>
  </div>
};

export default UseStateArray;
