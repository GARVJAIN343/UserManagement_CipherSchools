import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import axios from 'axios';

const CustomerData = () => {

  const [data, setData] = useState([]);

     useEffect(() =>{
        async function fetchData () {
             await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
              console.log(response.data);
              setData(response.data);
            })
        }
         fetchData();
  },[]);

  return (
    <div className='card'>
              <div className='cardHeading'><h3>Customer Success Managers</h3></div>
              <div className='field'>
                  <input type="text" id="search" name="search" placeholder='Add by Name or email' ></input><a href='#'>Add CSM</a> 
              </div>
              <div className='allCustomer'>
           {
             data.map((curEle)=>{
               let avtar = curEle.name;
               let nameArray = avtar.split(" ");
               let first = nameArray[0].slice(0,1);
               let second = nameArray[1].slice(0,1);
               let str = first+second;

                  return (
              
              <div className='customer'>
                <div className='avtar'><h5>{str}</h5></div>
                <div className='name'><h4>{curEle.name}</h4>
                      <p>{curEle.email}</p>
                </div>
                <div className='delete'><MdDelete style={{width: 20, height:20, color:"#1e31a1"}}/></div>
              </div>
       
                  )
             })
           }
           </div>
          </div>
  );
}

export default CustomerData;
