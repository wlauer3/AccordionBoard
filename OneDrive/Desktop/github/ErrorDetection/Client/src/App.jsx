import React from 'react';
import './App.css';
import './index.css';

function App() {
  return (
    <div className='window'>
      <div className = "options">
        <button className="button"> Checksum </button>
        <button className="button"> Parity Check </button>
        <button className="button"> Cyclic Redundancy Check </button>
      </div>
      <div className='viewSpace'>
        <div className='viewWindow'>

        </div>
      </div>
    </div>
  );
}

export default App;