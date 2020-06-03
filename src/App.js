import React from 'react';
import './App.css';
import { 
  Digits, 
  Operators, 
  Partition 
} from  './components'


function App() {
  return (
    <div className='App'>
    
      <Partition id='display' />

      <main>
        <Digits />
        <Operators />
      </main>

    </div>
  );
}

export default App;
