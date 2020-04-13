import React from 'react';
import { mount } from 'enzyme';
import CommentSvg from '../CommentSvg';

describe('<CommentSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<CommentSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

