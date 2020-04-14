import React from 'react';
import { mount } from 'enzyme';
import TagSvg from '../TagSvg';

describe('<TagSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<TagSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

