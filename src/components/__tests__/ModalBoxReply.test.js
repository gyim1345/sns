import React from 'react';
import { mount } from 'enzyme';
import ModalBoxReply from '../ModalBoxReply';
import { comments, currentUser, posts } from '../../Variables';

describe('<ModalBoxReply />', () => {
  it('renders svg', () => {
    const wrapper = mount(
      <ModalBoxReply
        currentUser={currentUser}
        commentAPI={comments}
        indexOfCommentOnThisPosting={0}
        postings={posts}
      />
    );

    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.props().commentAPI).toBe(comments);
    expect(wrapper.props().indexOfCommentOnThisPosting).toBe(0);
    expect(wrapper.props().postings).toBe(posts);
    expect(wrapper.html()).toMatch('<svg')
    expect(wrapper).toMatchSnapshot();
  });
});
