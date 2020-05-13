import React from 'react';
import { mount } from 'enzyme';
import ThreeRoundButtonSvg from '../ThreeRoundButtonSvg';

describe('<ThreeRoundButtonSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<ThreeRoundButtonSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

