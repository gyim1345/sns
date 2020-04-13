import React from 'react';
import { mount } from 'enzyme';
import Reply from '../Reply';
import { post, comments, currentUser } from './testjs';

describe('<Reply />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <Reply
        posting={post}
        commentAPI={comments}
        indexOfCommentOnThisPosting={0}
        currentUser={currentUser}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
