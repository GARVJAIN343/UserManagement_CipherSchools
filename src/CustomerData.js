import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import Data from './Data.js'; 
import DropDown from './DropDown.js';
import Chip from '@mui/material/Chip';


const CustomerData = () => {
  const [value, setValue] = useState("");
  const [dropDown, setDropDown] = useState([]);
  const [list, setList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  
  useEffect(()=>{
    let filterData = Data.filter((element)=>{
      if (element.name.toLowerCase().includes(value.toLowerCase()))
      return true;
      if (element.email.includes(value)) return true;
      return false;
    })
    let trump = value.trim();
    if(trump === "" || trump === " "){
      setDropDown([]);
    }
    else{
      setDropDown(filterData);
    }
  },[value])

  const changeHandler = (e) =>{
    e.preventDefault();
    setValue(e.target.value);
  }

  const addItem = (e) => { 
    e.preventDefault();
    let answer = list.map((event) => {
      let propertyValues = Object.values(event);
      return (propertyValues);
    })
     setFinalList(answer);
    setDropDown([]); 
    setValue("");
    setList([]);
  }
  
  const handleDelete = (id) => {
    const filteredUsersList = finalList.filter((item,index) => index !== id);
    setFinalList(filteredUsersList);
};  

const handleDelete1 = (chipToDelete) => {
   let chipDel = list.filter((chip) => {
    return(chip.id !== chipToDelete.id)
  });
  setList(chipDel);
};

  return (
    
    <div className='card'>
   
              <div className='cardHeading'><h3>Customer Success Managers</h3></div>
              <div className='field'>
              <div className='innerField'>
              <div className="chips">              
              {list.map((item, index) => ( 
              <Chip style={{backgroundColor:'#d7dcff', color:'#2235a3'}}
              key={index}
              label={item.name}
              onDelete={()=>{handleDelete1(item)}}/>
              ))}
              <input style={{border:0,outline:0}}id='garv' type='text' placeholder="Add by Name or email" value={value} onChange={changeHandler}>
              </input> 
              </div>
              <DropDown
              setList={setList}
              list={list}
              filterData={dropDown}/>
              </div>
              <a href='#' onClick={addItem}><span>Add CSM</span></a>
              </div>
              <div className='allCustomer'>
           {
              finalList.map((curEle,index)=>{
                console.log(curEle);
              let avtar = curEle[1];
              let nameArray = avtar.split(" ");
              let firstChar = nameArray[0][0].toUpperCase();
              let lastChar = nameArray[nameArray.length - 1][0].toUpperCase();
              let str = firstChar+lastChar;
              
                  return (
              
              <div className='customer' key={index}>
                <div  className='cardavtar'><h5>{str}</h5></div>
                <div className='name'><h4>{curEle[1]}</h4>
                      <span id="detail2">{curEle[3]}</span>
                </div>
                <div className='delete'>

                  <button className='deletebtn' onClick={() =>{handleDelete(index);}}>
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
