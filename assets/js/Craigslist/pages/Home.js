import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Jon'
		};
	}
	componentWillMount() {
		axios
			.get('/api/categories')
			.then(function(response) {
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	clickedBtn = () => {
		console.log();
	};
	loopCategories = () => {
		let testArray = [1, 2, 3, 4, 5, 6, 7];
		return testArray.map((item, i) => {
			return (
				<div className="categories" key={i}>
					<div className="title"> Community </div>{' '}
					<div className="group-links">
						<a href="#" className="link">
							{' '}
							Community{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							General{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Activities{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Groups{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Artists{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Local News{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Child Care{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Lost & found{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Classes{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Musician{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Events{' '}
						</a>{' '}
						<a href="#" className="link">
							{' '}
							Pets{' '}
						</a>{' '}
					</div>{' '}
				</div>
			);
		});
	};
	loopTags = () => {
		let testTags = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
		return testTags.map((item, i) => (
			<div key={i} className="tag">
				{' '}
				Apple MacBook{' '}
			</div>
		));
	};
	render() {
		return (
			<div className="Home">
				<div className="container">
					<h1>
						Connecting People <br /> Everywere: ){' '}
					</h1>{' '}
					<section className={'Links'}> {this.loopCategories()} </section>{' '}
					<section className={'trending'}>
						<input type="text" name="search" className="search" />
						<div className="title">
							<i className="far fa-clock" />
							Trending Now{' '}
						</div>{' '}
						<div className="trending-tags"> {this.loopTags()} </div>{' '}
					</section>{' '}
				</div>{' '}
			</div>
		);
	}
}
