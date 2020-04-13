import React from 'react';
import { mount } from 'enzyme';
import Comment from '../Comment';
import { post, comments, currentUser } from './testjs';

describe('<Comment />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <Comment posting={post} currentUser={currentUser} commentAPI={comments} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
