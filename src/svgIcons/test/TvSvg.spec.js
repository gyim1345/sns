import React from 'react';
import { mount } from 'enzyme';
import TvSvg from '../TvSvg';

describe('<TvSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<TvSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

