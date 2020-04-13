import React from 'react';
import { mount } from 'enzyme';
import UserSvg from '../UserSvg';

describe('<UserSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<UserSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

