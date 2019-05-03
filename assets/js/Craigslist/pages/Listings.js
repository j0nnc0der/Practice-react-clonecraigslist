import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div className="listings-page">
				<div className="container">
					<section className="filter">
						<div className="form-group price">
							<label> Price </label>
							<select name="min-price" className="max-price">
								<option value="0">0</option>
							</select>
						</div>
						<div className="min-price">
							<select name="price" className="min-price">
								<option value="1000"> 1000</option>
							</select>
						</div>{' '}
						<div className="form-group make">
							<label> Make </label>
							<select name="make" className="make">
								<option value="bmw">bmw</option>
							</select>
						</div>
						<div className="form-group model">
							<label> Model </label>
							<select name="model" className="model">
								<option value="bmw">bmw</option>
							</select>
						</div>
						<div className="form-group button">
							<div className="primary-btn">Update</div>
							<div className="reset-btn">Reset</div>
						</div>
					</section>
					{/* City: {match.params.city}
					Category: {match.params.category}
					Listings: {match.params.listings} */}

					<section className="list-view">
						<section className="change-view">
							<div className="form-group view-dropdown">
								<select name="select-view" className="select-view">
									<option value="gallery">Gallery view</option>
									<option value="gallery">List view</option>
									<option value="thumb">List view</option>
								</select>
							</div>
							<div className="form-group sort-dropdown">
								<select name="sort-dropdown" className="sort-dropdown">
									<option value="gallery">Newest</option>
								</select>
							</div>
						</section>{' '}
						<section className="all-item">
							<div className="item">
								<div className="image">
									<div className="price">$6100</div>
									image
								</div>
								<div className="details">
									<h5>Title</h5>
									<h6>City</h6>
								</div>
							</div>
						</section>
					</section>
				</div>
			</div>
		);
	}
}
