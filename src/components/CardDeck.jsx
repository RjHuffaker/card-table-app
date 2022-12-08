import React from 'react';
import './CardDeck.css';
import CardSlot from './CardSlot';

const CardDeck = ({ cardList, onCardPress, onCardMove, onCardRelease }) => {
	
	return (
		<div className='cardDeck'>
			{
				cardList.map((card, i) => {
					return (
						<CardSlot
							key={i}
							id={i}
							card={card}
							onCardPress={onCardPress}
							onCardMove={onCardMove}
							onCardRelease={onCardRelease}
						/>
					)
				})
			}
		</div>
	);
}

export default CardDeck;