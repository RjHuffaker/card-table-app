import React from 'react';
import './CardPanel.css';

const CardPanel = ({ id, card, cardList, setCardList }) => {
	
	let startX = 0;
	let startY = 0;

	let cardX = 0;
	let cardY = 0;

	const onCardPress = (id, cardList, event) => {
		startX = event.pageX;
		startY = event.pageY;
		cardX = cardList[id].x_coord;
		cardY = cardList[id].y_coord;
	}

	const onCardMove = (id, cardList, event) => {
		let _cardList = cardList;
		const moveX = event.pageX - startX;
		const moveY = event.pageY - startY;
		_cardList[id].x_coord = moveX + cardX;
		_cardList[id].y_coord = moveY + cardY;
		setCardList(_cardList);
	}

	const onCardRelease = (id, cardList, event) => {
		let _cardList = cardList;
		startX = 0;
		startY = 0;
		_cardList[id].x_coord = cardX;
		_cardList[id].y_coord = cardY;
		cardX = 0;
		cardY = 0;
		setCardList(_cardList);
	}
	
	return (
		<div
			draggable
			className='cardPanel'
			style={{'top': card.y_coord+'px', 'left': card.x_coord+"px", 'height': card.y_dim+"px", 'width': card.x_dim+"px"}}
			onDragStart={(event) => onCardPress(id, cardList, event)}
			onDrag={(event) => onCardMove(id, cardList, event)}
			onDragEnd={(event) => onCardRelease(id, cardList, event)}
		>
			<h4>{card.title}</h4>
			<p>X: {card.x_coord}</p>
			<p>y: {card.y_coord}</p>
		</div>
	);
}

export default CardPanel;