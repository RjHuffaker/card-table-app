import React from 'react';
import './CardSlot.css';
import CardPanel from './CardPanel';

const CardSlot = ({ id, card, onCardPress, onCardMove, onCardRelease }) => {
	
	return (
		<div 
			draggable
			className='cardSlot'
			style={{'top': card.y_coord+'px', 'left': card.x_coord+"px", 'height': card.y_dim+"px", 'width': card.x_dim+"px"}}
			onDragStart={(event) => onCardPress(id, event)}
			onDrag={(event) => onCardMove(id, event)}
			onDragEnd={(event) => onCardRelease(id, event)}
		>
			<CardPanel
				id={id}
				card={card}
				
			/>
		</div>
	);
}

export default CardSlot;