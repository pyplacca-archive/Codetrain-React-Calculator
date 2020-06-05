import React from 'react'

const KeyButton = ({text, id}) => <p id={id}>{text}</p>

function KeyGroup({cls, children}) {
	
	return (
		<div className={cls}>
         	{
	            children
	            .map((t, i) => {
	            	const [t, id] = t.split(' ');
	            	return <KeyButton id={id || ''} text={t} key={i} />
	            })
          	}
        </div>
	)		
}


export default KeyGroup;
