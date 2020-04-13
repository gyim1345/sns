import React from 'react';
import { mount } from 'enzyme';
import ScrappedPosts from '../ScrappedPosts';
import { currentUser } from './testjs';

describe('<ScrappedPosts />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<ScrappedPosts user={currentUser} />);
    expect(wrapper).toMatchSnapshot();
  });
});
