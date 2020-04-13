import React from 'react';
import { mount } from 'enzyme';
import ModalBoxReply from '../ModalBoxReply';
import { comments, currentUser, posts } from './testjs';

describe('<ModalBoxReply />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <ModalBoxReply
        currentUser={currentUser}
        commentAPI={comments}
        indexOfCommentOnThisPosting={0}
        postings={posts}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
