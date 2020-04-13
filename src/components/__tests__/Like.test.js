import React from 'react';
import { mount } from 'enzyme';
import Like from '../Like';
import { post, posts } from './testjs';

describe('<Like />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Like posting={post} postingAll={posts} />);
    expect(wrapper).toMatchSnapshot();
  });
});
