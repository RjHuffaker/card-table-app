import React from 'react';
import './CardDeck.css';
import CardPanel from './CardPanel';

const CardDeck = ({ cardList, setCardList }) => {
	
	return (
		<div className='cardDeck'>
			{
				cardList.map((card, i) => {
					return (
						<CardPanel
							key={i}
							id={i}
							card={card}
							cardList={cardList}
							setCardList={setCardList}
						/>
					)
				})
			}
		</div>
	);
}

export default CardDeck;