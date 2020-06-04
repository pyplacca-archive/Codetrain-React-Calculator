import React from 'react'

class Digits extends React.Component {
	render () {
		const children = [
			'AC', 'Del', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'
		]
		
		return (
			<div className='digits'>
	         	{
		            children
		            .map((t, i) => <KeyButton text={t} key={i} />)
	          	}
	        </div>
		)		
    }
}

class Operators extends React.Component {
	render () {
		const children = ['/', '*', '-', '+', '=']

		return (
			<div className='operators'>
				{
		            children
		            .map((op, i) => <KeyButton text={op} key={i} />)
	          	}
	        </div>
		)
	}
}

function KeyButton (props) {
  return ( <p>{props.text}</p> )
}


export { 
	Partition, 
	Digits, 
	Operators 
}
