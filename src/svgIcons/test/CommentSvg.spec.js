import React from 'react';
import { mount } from 'enzyme';
import CommentSvg from '../CommentSvg';

describe('<CommentSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<CommentSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

