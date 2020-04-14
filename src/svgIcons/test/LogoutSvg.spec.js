import React from 'react';
import { mount } from 'enzyme';
import LogoutSvg from '../LogoutSvg';

describe('<LogoutSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<LogoutSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

