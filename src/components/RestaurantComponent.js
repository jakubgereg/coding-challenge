import React, { Component } from 'react'
import * as utils from '../utils'

export default class RestaurantComponent extends Component {
  render() {
    return (
      <div className='rest-wrapper'>
        <div className='rest-name'><span>Restaurant:</span>{this.props.name}</div>
        <div className='rest-address'><span>Address:</span>{this.props.address}</div>
        <div className='rest-price'><span>Price:</span>{utils.makeDollarSigns(this.props.price)}</div>
      </div>
    )
  }


}
