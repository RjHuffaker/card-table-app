import React from 'react';
import './CardPanel.css';

const CardPanel = ({card}) => {
	return (
		<div className='cardPanel'>
			<h4>{card.title}</h4>
			<p>X: {card.x_coord}</p>
			<p>y: {card.y_coord}</p>
		</div>
	);
}

export default CardPanel;