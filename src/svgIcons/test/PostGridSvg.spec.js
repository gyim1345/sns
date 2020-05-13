import React from 'react';
import { mount } from 'enzyme';
import PostGridSvg from '../PostGridSvg';

describe('<PostGridSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<PostGridSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

