import React from 'react';
import { mount } from 'enzyme';
import Reply from '../Reply';
import { post, comments, currentUser, currentUserName } from '../../Variables';

describe('<Reply />', () => {
  it('renders <input>, <button>, and "AddReply"', () => {
    const wrapper = mount(
      <Reply
        posting={post}
        commentAPI={comments}
        indexOfCommentOnThisPosting={0}
        currentUser={currentUser}
      />
    );

    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.props().commentAPI).toBe(comments);
    expect(wrapper.props().indexOfCommentOnThisPosting).toBe(0);
    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.html()).toMatch('<input');
    expect(wrapper.html()).toMatch('<button');
    expect(wrapper.text()).toMatch('AddReply');
    expect(wrapper).toMatchSnapshot();
  });
});
