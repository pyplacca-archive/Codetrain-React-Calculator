import React from 'react'

const KeyButton = ({text, id}) => <p id={id}>{text}</p>

function KeyGroup({cls, children}) {
	
	return (
		<div className={cls}>
         	{
	            children
	            .map((t, i) => {
	            	const [txt, id] = t.split(' ');
	            	return <KeyButton id={id || ''} text={txt} key={i} />
	            })
          	}
        </div>
	)		
}


export default KeyGroup;
