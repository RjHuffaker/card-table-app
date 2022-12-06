import React, { Component } from 'react';
import './App.css'
import CardDeck from '../components/CardDeck';
import cardList from './cardList';

class App extends Component {



	onCardPress = (event, id) => {
		console.log(event.clientX, event.clientY);
		cardList[id].x_coord = event.clientX;
		cardList[id].y_coord = event.clientY;
	}

	render(){
		return (
			<div>
				<h1>Card Table App</h1>
				<CardDeck cardList={cardList} onCardPress={this.onCardPress}/>
			</div>
		);
	}
}

export default App;