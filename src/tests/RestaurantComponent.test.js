import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantComponent from "../components/RestaurantComponent";

describe('<RestaurantComponent />', () => {
  it('renders correctly', () => {
    const props = {
      name: "testRestaurant",
      price: 4,
      address: "testAdress"
    }
    const wrapper = shallow(<RestaurantComponent {...props} />)

    expect(wrapper).toMatchSnapshot();
  })

  it('renders restaurant details correctly', () => {
    const props = {
      name: "Super Restaurant",
      price: 4,
      address: "Super address"
    }
    const wrapper = mount(<RestaurantComponent {...props} />)

    const restName = wrapper.find('.rest-name').text();
    expect(restName).toEqual("Restaurant:Super Restaurant")
    const restAddress = wrapper.find('.rest-address').text();
    expect(restAddress).toEqual("Address:Super address")
    const restPrice = wrapper.find('.rest-price').text();
    expect(restPrice).toEqual("Price:$$$$")
  })
})


