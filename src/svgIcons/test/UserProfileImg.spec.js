import React from 'react';
import { mount } from 'enzyme';
import UserProfileImg from '../UserProfileImg';

describe('<UserProfileImg />', () => {
  it('renders <img>', () => {
    const wrapper = mount(<UserProfileImg />);

    expect(wrapper.html()).toMatch('<img');
    expect(wrapper).toMatchSnapshot();
  });
})

