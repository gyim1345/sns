import React from 'react';
import { mount } from 'enzyme';
import UserProfileImg from '../UserProfileImg';

describe('<UserProfileImg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<UserProfileImg />);
    expect(wrapper).toMatchSnapshot();
  });
})

