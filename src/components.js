import React from 'react'

const KeyButton = ({text}) => <p>{text}</p>

function KeyGroup({cls, children}) {
	
	return (
		<div className={cls}>
         	{
	            children
	            .map((t, i) => <KeyButton text={t} key={i} />)
          	}
        </div>
	)		
}


export default KeyGroup;
