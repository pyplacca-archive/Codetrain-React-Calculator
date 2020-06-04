import React from 'react';
import './App.css';
import { Digits, Operators } from  './components'


function App() {
  return (
    <div className='App'>
    
      <div id='display'></div>

      <main>
        <Digits />
        <Operators />
      </main>

    </div>
  );
}

export default App;
