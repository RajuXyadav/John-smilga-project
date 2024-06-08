import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false)
  const [data,setData] = useState(null);
  useEffect(()=>{
   
     const fetchData = async()=>{
      try{
        const response = await fetch('https://api.github.com/users/QuincyLarson');
        const data = await response.json();
        if(!data.ok){
          setIsError(true)
        }
        setData(data)
        console.log(response)
        setIsLoading(false)
      }catch(error){
        setIsError(true)
        console.log(error)
      }
        
     }
     fetchData()
  },[])
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>There is an error...</h1>
  }
  return <div>
     <img style={{width:'150px', borderRadius:'25px'}} src={data.avatar_url} alt={data.name} />
     <h2>{data.name}</h2>
     <h4>works at {data.company}</h4>
     <p>{data.bio}</p>
  </div>
};
export default MultipleReturnsFetchData;
