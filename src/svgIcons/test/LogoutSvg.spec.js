import React from 'react';
import { mount } from 'enzyme';
import LogoutSvg from '../LogoutSvg';

describe('<LogoutSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<LogoutSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

