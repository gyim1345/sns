import React from 'react';
import { mount } from 'enzyme';
import Posting from '../Posting';
import {
  post,
  posts,
  comments,
  currentUser,
  sizeOfPicture,
  currentUserName
} from '../../Variables';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Posting />', () => {
  it('renders <h1> and <div>', () => {
    const wrapper = shallow(
      <Router key="0">
        <Posting
          posting={post}
          postingALl={posts}
          commentAPI={comments}
          currentUser={currentUser}
          userOfActivePage={currentUser}
          sizeOfPicture={sizeOfPicture}
        />
      </Router>
    );
    expect(wrapper.props().children.props.posting).toBe(post);
    expect(wrapper.props().children.props.postingALl).toBe(posts);
    expect(wrapper.props().children.props.commentAPI).toBe(comments);
    expect(wrapper.props().children.props.currentUser).toBe(currentUser);
    expect(wrapper.props().children.props.userOfActivePage).toBe(currentUser);
    expect(wrapper.props().children.props.sizeOfPicture).toBe(sizeOfPicture);
    expect(wrapper).toMatchSnapshot();
  });
});
