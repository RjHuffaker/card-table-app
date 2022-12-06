import React from 'react';
import './CardDeck.css';
import CardSlot from './CardSlot';

const CardDeck = ({cardList, onCardPress}) => {
	
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
						/>
					)
				})
			}
		</div>
	);
}

export default CardDeck;