import React from 'react';
import { mount } from 'enzyme';
import SettingSvg from '../SettingSvg';

describe('<SettingSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<SettingSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

