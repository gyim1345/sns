import React from 'react';
import { mount } from 'enzyme';
import PostCommentButtonSvg from '../PostCommentButtonSvg';

describe('<PostCommentButtonSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<PostCommentButtonSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

