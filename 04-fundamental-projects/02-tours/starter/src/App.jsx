import { useEffect } from "react";
import { useState } from "react";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [data,setData] = useState([]);
  const [toggle,seToggle] = useState(false)
 
  const fetchData = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    setData(data)
  }
     
  useEffect(()=>{
      fetchData()
  },[])

  const handlerFunction = (id)=>{
    console.log(id)
     const newData = data.filter((value)=> value.id !== id)
     setData(newData)
  }
  const 
  return <main>
          <h1>Our Tours</h1>
         <div className="tours">
            {data.map((value)=>{
              const {id,name,info,image,price} =value
                 return <article key={id}>
                   <div className="single-tour">
                    <div className="tour-price">{price}</div>
                    <img src={image} alt="" style={{height:'13rem'}} />
                    <div className="info">
                      <div className="tour-info">
                        <div>{name}</div>
                        <p>
                           <button className="info-btn" onClick={()=>seToggle(!toggle)}>{toggle ? <Read info={info} read='Read More..'/>:}</button>
                        </p>
                        <button className="btn" onClick={()=>handlerFunction(id)}>Not interseted</button>
                      </div>
                    </div>
                   </div>
                 </article>
            })}
          </div> 
     </main>
};
export default App;
