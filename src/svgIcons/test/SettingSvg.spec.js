import React from 'react';
import { mount } from 'enzyme';
import SettingSvg from '../SettingSvg';

describe('<SettingSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<SettingSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

