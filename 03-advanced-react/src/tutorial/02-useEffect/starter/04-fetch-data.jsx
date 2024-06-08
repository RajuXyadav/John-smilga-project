import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [data,setData] = useState([]);
   useEffect(()=>{
       const fetchData = async ()=>{
         const response = await fetch(url);
         const users = await response.json();
         setData(users)
       }
       fetchData()
   },[])
  return <section>
    <h3>github users</h3>
    <ul className="users">
      {data.map((user)=>{
         const {id,login,avatar_url,html_url} = user
          return <li key={id}>
            <img src={avatar_url} alt={login} />
             <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
             </div>
          </li>
      })}
    </ul>
  </section>
};
export default FetchData;
