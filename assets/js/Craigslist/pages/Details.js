import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.js';

export default class Details extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div className="details-page">
				<div className="container">
					<div className="white-box">
						<section className="submenu">
							<div className="direction">
								<a href="#" className="prev">
									Prev
								</a>
								<a href="#" className="next">
									Next
								</a>
							</div>

							<nav className="sub-links">
								<a href="#">More Ads by User</a>
								<a href="#">Print</a>
								<a href="#">Share</a>
								<a href="#">Contact Seller</a>
							</nav>
						</section>

						<section className="content-area">
							<div className="media-column">
								<Gallery />
							</div>

							<div className="details-column">
								<div className="date">Posted: September 6th 2018</div>
								<h3 className="title">Black 2015 Mercedes 200</h3>
								<h4 className="price">$16,000</h4>
								<div className="more-details">
									<div className="info">
										<label>Vin</label>
										<h5>fgggggggg</h5>
									</div>
									<div className="info">
										<label>Mileage</label>
										<h5>3366</h5>
									</div>
									<div className="info">
										<label>Transmission</label>
										<h5>Manual</h5>
									</div>
									<div className="info">
										<label>Vin</label>
										<h5>fgggggggg</h5>
									</div>
									<div className="info">
										<label>Mileage</label>
										<h5>3366</h5>
									</div>
									<div className="info">
										<label>Transmission</label>
										<h5>Manual</h5>
									</div>
								</div>
								<div className="description">
									<label>Description </label>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Illo praesentium veritatis debitis, nisi animi nam totam?
										Similique adipisci ad temporibus, sapiente consequuntur
										corporis, impedit quis ab reprehenderit iste explicabo.
										Minus.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Illo praesentium veritatis debitis, nisi animi nam totam?
										Similique adipisci ad temporibus, sapiente consequuntur
										corporis, impedit quis ab reprehenderit iste explicabo.
										Minus.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Illo praesentium veritatis debitis, nisi animi nam totam?
										Similique adipisci ad temporibus, sapiente consequuntur
										corporis, impedit quis ab reprehenderit iste explicabo.
										Minus.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Illo praesentium veritatis debitis, nisi animi nam totam?
										Similique adipisci ad temporibus, sapiente consequuntur
										corporis, impedit quis ab reprehenderit iste explicabo.
										Minus.
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}
