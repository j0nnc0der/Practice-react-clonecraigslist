import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Jon'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="container">
				<header>
					<div className={'left-menu'}>
						<div className={'logo'}>Craigslist </div>
						<div className={'city'}>
							{' '}
							London
							<i className={`fas fa-caret-down`} />
						</div>
					</div>

					<div className={'right-menu'}>
						<div className={'user-img'}>Img</div>
						<div className={'user-dropdown'}>
							My Account
							<i className={`fas fa-caret-down`} />
						</div>
						<div className={'post-btn'}>Post to classifieds </div>
					</div>
				</header>
			</div>
		);
	}
}
