import React from 'react';
import { mount } from 'enzyme';
import ThreeRoundButtonSvg from '../ThreeRoundButtonSvg';

describe('<ThreeRoundButtonSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<ThreeRoundButtonSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

