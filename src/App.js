import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css'
import ContactUs from './ContactUs';

function App() {

  const internal={

                backgroundColor:'green',
                fontSize:"30px"
  }
  return (
        <>
        <h1 style={{backgroundColor:'yellow',fontSize:'30px'}}>Hello World</h1>
        <h1 style={internal}>internal</h1>
        <h1 className='external'>External style</h1>
        <ContactUs/>
        </>
        );
}

export default App;
