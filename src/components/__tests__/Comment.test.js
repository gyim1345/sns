import React from 'react';
import { mount } from 'enzyme';
import Comment from '../Comment';
import { post, comments, currentUser, currentUserName } from '../../Variables';

describe('<Comment />', () => {
  it('renders comments', () => {
    const wrapper = shallow(
      <Comment posting={post} currentUser={currentUser} commentAPI={comments} />
    );

    expect(wrapper.text()).toMatch(currentUserName);
    expect(wrapper.text()).toMatch(`: ${comments[0].title}`);
    expect(wrapper).toMatchSnapshot();
  });
});
