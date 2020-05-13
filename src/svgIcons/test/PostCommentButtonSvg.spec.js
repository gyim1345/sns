import React from 'react';
import { mount } from 'enzyme';
import PostCommentButtonSvg from '../PostCommentButtonSvg';

describe('<PostCommentButtonSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<PostCommentButtonSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

