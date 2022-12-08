import React, { Component } from 'react';
import './App.css'
import CardDeck from '../components/CardDeck';
import cardList from './cardList';

let startX = 0;
let startY = 0;

let cardX = 0;
let cardY = 0;

class App extends Component {

	constructor(){
		super()
		this.state = {
			cardList: cardList
		};
	}

	onCardPress = (id, event) => {
		startX = event.pageX;
		startY = event.pageY;
		cardX = cardList[id].x_coord;
		cardY = cardList[id].y_coord;
	}

	onCardMove = (id, event) => {
		console.log(event);

		let cardList = this.state.cardList;
		const moveX = event.pageX - startX;
		const moveY = event.pageY - startY;
		cardList[id].x_coord = moveX + cardX;
		cardList[id].y_coord = moveY + cardY;
		this.setState({cardList: cardList});
	}

	onCardRelease = (id, event) => {
		startX = 0;
		startY = 0;
		cardList[id].x_coord = cardX;
		cardList[id].y_coord = cardY;
		cardX = 0;
		cardY = 0;
	}

	render(){
		return (
			<div>
				<h1>Card Table App</h1>
				<CardDeck
					cardList={this.state.cardList}
					onCardPress={this.onCardPress}
					onCardMove={this.onCardMove}
					onCardRelease={this.onCardRelease}
				/>
			</div>
		);
	}
}

export default App;