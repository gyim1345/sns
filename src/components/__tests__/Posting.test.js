import React from 'react';
import { mount } from 'enzyme';
import Posting from '../Posting';
import { post, posts, comments, currentUser, sizeOfPicture } from './testjs';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Posting />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <Router>
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
    expect(wrapper).toMatchSnapshot();
  });
});
