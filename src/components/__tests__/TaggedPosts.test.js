import React from 'react';
import { mount } from 'enzyme';
import TaggedPosts from '../TaggedPosts';
import { currentUser } from './testjs';

describe('<TaggedPosts />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<TaggedPosts user={currentUser} />);
    expect(wrapper).toMatchSnapshot();
  });
});
