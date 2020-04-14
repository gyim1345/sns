import React from 'react';
import { mount } from 'enzyme';
import TaggedPosts from '../TaggedPosts';
import { currentUser } from '../../Variables';

describe('<TaggedPosts />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<TaggedPosts user={currentUser} />);

    expect(wrapper.props().user).toBe(currentUser);
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
