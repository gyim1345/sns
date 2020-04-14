import React from 'react';
import { mount } from 'enzyme';
import Like from '../Like';
import { post, posts } from '../../Variables';
import LikeSvg from '../../svgIcons/LikeSvg';

describe('<Like />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Like posting={post} postingAll={posts} />);

    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.props().postingAll).toBe(posts);
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper.text()).toMatch('좋아요');
    expect(wrapper.text()).toMatch(`${post.like.length}개`);
    expect(wrapper).toMatchSnapshot();
  });
});
