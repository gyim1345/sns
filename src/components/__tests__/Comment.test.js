import React from 'react';
import { mount } from 'enzyme';
import Comment from '../Comment';
import { post, comments, currentUser, currentUserName } from '../../Variables';

describe('<Comment />', () => {
  it('renders comments', () => {
    const wrapper = mount(
      <Comment posting={post} currentUser={currentUser} commentAPI={comments} />
    );

    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.props().commentAPI).toBe(comments);
    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.text()).toMatch(currentUserName);
    expect(wrapper.text()).toMatch(`: ${comments[0].title}`);
    expect(wrapper.html()).toMatch('<ul>');
    expect(wrapper.html()).toMatch('<div>');
    expect(wrapper).toMatchSnapshot();
  });
});
