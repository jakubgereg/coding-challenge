import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantFinderComponent from "../components/RestaurantFinderComponent";

describe('<RestaurantFinderComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RestaurantFinderComponent />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should render default message by default', () => {
    const wrapper = mount(<RestaurantFinderComponent />);
    const text = wrapper.find('.restaurant-result-wrapper').text()
    expect(text).toEqual("Please enter correct city name.")
  })
})


