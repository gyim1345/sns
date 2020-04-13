import React from 'react';
import { mount } from 'enzyme';
import PostingList from '../PostingList';
import { post, posts, comments, currentUser, sizeOfPicture } from './testjs';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<PostingList />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <Router>
        <PostingList
          posting={posts}
          commentAPI={comments}
          currentUser={currentUser}
          userOfActivePage={currentUser}
          sizeOfPicture={sizeOfPicture}
        />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
