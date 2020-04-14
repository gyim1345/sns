import React from 'react';
import { mount } from 'enzyme';
import ScrappedPosts from '../ScrappedPosts';
import { currentUser } from '../../Variables';

describe('<ScrappedPosts />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<ScrappedPosts user={currentUser} />);

    expect(wrapper.props().user).toBe(currentUser);
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
