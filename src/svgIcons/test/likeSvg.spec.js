import React from 'react';
import { mount } from 'enzyme';
import LikeSvg from '../LikeSvg';

describe('<LikeSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<LikeSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

