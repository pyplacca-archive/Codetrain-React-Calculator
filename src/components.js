import React from 'react'


class KeyGroup extends React.Component {
	
	render () {
		const {cls, children} = this.props
		
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
}

const KeyButton = ({text, id}) => <p id={id}>{text}</p>

export default KeyGroup;
