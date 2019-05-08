import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			allImgs: '',
			currentImg: '',
			currentIndex: 0
		};
	}

	componentWillMount() {
		const allImgs = [
			'https://img1.icarcdn.com/2907534/gallery_recon-car-carlist-mercedes-benz-c-class-c200-avantgarde-sedan-malaysia_2907534_mG2KcdaLGbkm2FDcApMdDs.jpg?smia=xTM',
			'https://images.pexels.com/photos/1236792/pexels-photo-1236792.jpeg?cs=srgb&dl=auto-automobile-automotive-1236792.jpg&fm=jpg',
			'https://trademe.tmcdn.co.nz/photoserver/full/724493492.jpg',
			'https://cdn1.carbuyer.co.uk/sites/carbuyer_d7/files/styles/gallery_adv/public/2018/06/10-mercedes-aclass-steering-wheel.jpg?itok=UxEOwC4D',
			'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mercedes-benz-a-class-interior.jpg?itok=qQyl_aTb',
			'https://images.unsplash.com/photo-1529765096899-5c3c546419ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
		];
		this.setState({
			allImgs,
			currentImg: allImgs[this.state.currentIndex]
		});
	}

	allImgsLoop = () => {
		console.log(this.state.allImgs);
		return this.state.allImgs.map((item, i) => {
			return (
				<div
					key={i}
					onClick={this.clickedThumb.bind(null, i)}
					className="thumb-img"
					style={{
						backgroundImage: `url('${item}')`
					}}
				/>
			);
		});
	};

	nextBtn = () => {
		if (this.state.currentIndex != this.state.allImgs.length - 1) {
			this.setState({
				currentIndex: this.state.currentIndex + 1
			});
		}
	};
	prevBtn = () => {
		if (this.state.currentIndex != 0) {
			this.setState({
				currentIndex: this.state.currentIndex - 1
			});
		}
	};

	clickedThumb = index => {
		this.setState({
			currentIndex: index
		});
	};

	render() {
		const { match, location, history } = this.props;
		return (
			<div className="gallery">
				<div className="slider">
					<div className="main-image">
						<div className="arrows left-arrow" onClick={this.prevBtn}>
							<i className="fas fa-chevron-left" />
						</div>
						<div className="arrows right-arrow" onClick={this.nextBtn}>
							<i className="fas fa-chevron-right" />
						</div>
						<div
							className="image-1"
							style={{
								backgroundImage: `url('${
									this.state.allImgs[this.state.currentIndex]
								}')`
							}}
						/>
					</div>
				</div>

				<div className="thumbnails">{this.allImgsLoop()}</div>
			</div>
		);
	}
}
