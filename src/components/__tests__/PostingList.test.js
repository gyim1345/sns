import React from 'react';
import { mount } from 'enzyme';
import PostingList from '../PostingList';
import { post, posts, comments, currentUser, sizeOfPicture, currentUserName } from '../../Variables';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<PostingList />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <Router key="TEST_KEY">
        <PostingList
          posting={posts}
          commentAPI={comments}
          currentUser={currentUser}
          userOfActivePage={currentUser}
          sizeOfPicture={sizeOfPicture}
        />
      </Router>
    );

    expect(wrapper.props().children.props.posting).toBe(posts);
    expect(wrapper.props().children.props.commentAPI).toBe(comments);
    expect(wrapper.props().children.props.currentUser).toBe(currentUser);
    expect(wrapper.props().children.props.userOfActivePage).toBe(currentUser);
    expect(wrapper.props().children.props.sizeOfPicture).toBe(sizeOfPicture);
    expect(wrapper.html()).toMatch('<h1');
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper.text()).toMatch(currentUserName);
    expect(wrapper.text()).toMatch('좋아요');
    expect(wrapper.text()).toMatch(`${post.like.length}`);
    expect(wrapper.text()).toMatch(`${post.title}`);
    expect(wrapper).toMatchSnapshot();
  });
});
