import React from 'react';
import './App.css';
import KeyGroup from  './components';


const groups = [
	{
		master: 'digits',
		sub: 'AC Del % 7 8 9 4 5 6 1 2 3 0 .'
	},
	{
		master: 'operators',
		sub: '/ * - + ='
	}
]

function App() {
  return (
    <div className='App'>
    
      <div id='display'></div>

      <main>
        {
        	groups.map(
        		({master, sub}, i) => 
        		<KeyGroup cls={master} children={sub.split(' ')} key={i} />
        	)
        }
      </main>

    </div>
  );
}

export default App;
