import React, { useState } from 'react';
import './App.css'
import CardDeck from './components/CardDeck';
import cardListData from './cardListData';

function App(){

	const [cardList, setCardList] = useState(cardListData);

	const resetCardList = (_cardList) => {
		console.log(_cardList);
		setCardList(_cardList);
	}

		return (
			<div>
				<h1>Card Table App</h1>
				<CardDeck
					cardList={cardList}
					setCardList={resetCardList}
				/>
			</div>
		);
}

export default App;