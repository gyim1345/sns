import React from 'react';
import { mount } from 'enzyme';
import UserSvg from '../UserSvg';

describe('<UserSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<UserSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

