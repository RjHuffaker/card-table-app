import React from 'react';
import './CardSlot.css';
import CardPanel from './CardPanel';

const CardSlot = ({id, card, onCardPress}) => {
	
	return (
		<div className='cardSlot'
			style={{'top': card.y_coord+'px', 'left': card.x_coord+"px", 'height': card.y_dim+"px", 'width': card.x_dim+"px"}}
			draggable onDrag={(event) => { onCardPress(event, id) }}
		>
			<CardPanel card={card}/>
		</div>
	);
}

export default CardSlot;