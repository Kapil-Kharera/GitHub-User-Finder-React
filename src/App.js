import React from 'react';
import './App.css';
import DisplayData from './components/DisplayData';
import Form from './components/Form';

function App() {
  return (
    <>
      <div className="container">
        <h1>Github User Find</h1>
        <Form />
        <DisplayData />
      </div>
    </>

  );
}

export default App;
