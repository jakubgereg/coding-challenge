import React, { Component } from 'react'
import RestaurantComponent from './RestaurantComponent';

export default class RestaurantFinderComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.getDataForCity(event.target.value)
  }

  render() {
    let restaurants = this.state.restaurants;
    const invalidCity = <div>Please enter correct city name.</div>;
    return (
      <React.Fragment>
        <div className='city-input-wrapper'>
          <span>City:</span>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className='restaurant-result-wrapper'>
          {restaurants && restaurants.length ? restaurants.map((result) =>
            <RestaurantComponent key={result.id} name={result.name} address={result.address} price={result.price} />
          ) : invalidCity}
        </div>
      </React.Fragment>
    )
  }

  getDataForCity(city) {
    if (!city) {
      this.setState({ restaurants: [] });
    } else {
      fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}`).then(response => response.json()).then(data => this.setState({ restaurants: data.restaurants }))
    }
  }
}
