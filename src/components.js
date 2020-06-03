import React from 'react'

class Digits extends React.Component {
	render () {
		return (
			<div className='digits'>
	         	{
		            ['AC', 'Del', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
		            .map((t, i) => <KeyButton text={t} key={i} />)
	          	}
	        </div>
		)		
    }
}

class Operators extends React.Component {
	render () {
		return (
			<div className='operators'>
				{
		            ['/', '*', '-', '+', '=']
		            .map((op, i) => <KeyButton text={op} key={i} />)
	          	}
	        </div>
		)
	}
}

function KeyButton (props) {
  return (
    <p>{props.text}</p>
  )
}


function Partition (props) {
	return (
		<div id={props.id}></div>
	)
}

export { Partition, Digits, Operators }
