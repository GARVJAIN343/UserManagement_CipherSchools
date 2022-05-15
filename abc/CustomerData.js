import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import Data from './Data.js'; 
import DropDown from './DropDown.js';

const CustomerData = () => {

  const [data, setData] = useState(Data);
  const [value, setValue] = useState("");
  const [dropDown, setDropDown] = useState([]);
  const [list, setList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  useEffect(()=>{
    let filterData = data.filter((element)=>{
      // console.log(value);
      if (element.name.toLowerCase().includes(value.toLowerCase()))
      return true;
      if (element.email.includes(value)) return true;
      return false;
    })
    if(value != ""){
      setDropDown(filterData);
    }
  },[value])

  const changeHandler = (e) =>{
    e.preventDefault();
    // console.log(value);
    setValue(e.target.value);
  }

  const addItem = () => { 
    let answer = list.map((event) => {
      let propertyValues = Object.values(event);
      // console.log(propertyValues);
      setFinalList([...finalList, propertyValues]);
      return (event);
    })

    // console.log(answer);
    // setFinalList([...finalList, list]);
    setDropDown([]); 
    setValue("");
    setList([]);
  }
  
  const handleDelete = (id) => {
    let inn = id;
    console.log(inn);
    const filteredUsersList = finalList.filter((item) => item[0] !== inn);
    setFinalList(filteredUsersList);
};  

  return (
    
    <div className='card'>
              <div className='cardHeading'><h3>Customer Success Managers</h3></div>
              <div className='field'>
              <input id='garv' type='text' placeholder="Add by Name or email" value={value} onChange={changeHandler}>
              </input> 
              <DropDown 
              setList={setList}
              list={list}
              filterData={dropDown}/>
              <a href='#' onClick={addItem} >Add CSM</a>
              </div>
              <div className='allCustomer'>
           {
              finalList.map((curEle)=>{
              // console.log(curEle);
              let avtar = curEle[1];
              let nameArray = avtar.split(" ");
              let firstChar = nameArray[0][0].toUpperCase();
              let lastChar = nameArray[nameArray.length - 1][0].toUpperCase();
              let str = firstChar+lastChar;
              let id = curEle[0];
              
                  return (
              
              <div className='customer' key={curEle[0]}>
                <div className='cardavtar'><h5>{str}</h5></div>
                <div className='name'><h4>{curEle[1]}</h4>
                      <span>{curEle[3]}</span>
                </div>
                <div className='delete'>

                  <button className='deletebtn' onClick={() =>{handleDelete(curEle[0]);}}>
                  <MdDelete style={{width: 20, height:20, color:"#1e31a1"}}/>
                  </button>
                </div>
              </div>
       
                  )
             })
           }
           </div>
          </div>
  );
}

export default CustomerData;
