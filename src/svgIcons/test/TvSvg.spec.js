import React from 'react';
import { mount } from 'enzyme';
import TvSvg from '../TvSvg';

describe('<TvSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<TvSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

