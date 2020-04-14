import React from 'react';
import { mount } from 'enzyme';
import LikeFilledSvg from '../LikeFilledSvg';

describe('<LikeFilledSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<LikeFilledSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

