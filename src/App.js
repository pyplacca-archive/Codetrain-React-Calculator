import React from 'react';
import './App.css';
import KeyGroup from  './components';


const groups = [
	{
		master: 'digits',
		sub: [
			'AC clear', 'Del del', '% percent', 
			'7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'
		]
	},
	{
		master: 'operators',
		sub: ['/', '*', '-', '+', '= equals']
	}
]

function App() {
  return (
    <div className='App'>
    
      <div id='display'>
        <h1 contenteditable="true">0</h1>
      </div>

      <main>
        {
        	groups.map(
        		({master, sub}, i) => 
        		<KeyGroup cls={master} children={sub} key={i} />
        	)
        }
      </main>

    </div>
  );
}

export default App;
