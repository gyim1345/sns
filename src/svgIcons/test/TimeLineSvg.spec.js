import React from 'react';
import { mount } from 'enzyme';
import TimeLineSvg from '../TimeLineSvg';

describe('<TimeLineSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<TimeLineSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

