import './App.css';
import React from 'react'
import CustomerData from './CustomerData';
import Header from './Header';


function App() {
  return (
    <div className="App">
        <div className='main'>
          <Header/>
          <CustomerData/>
        </div>
    </div>
  );
}

export default App;
