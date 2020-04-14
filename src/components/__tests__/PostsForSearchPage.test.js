import React from 'react';
import { mount } from 'enzyme';
import PostsForSearchPage from '../PostsForSearchPage';
import { post, currentUser } from '../../Variables';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<PostsForSearchPage />', () => {
  it('renders <div>', () => {
    const wrapper = mount(
      <Router>
        <PostsForSearchPage posting={post} setUserOfActivePage={currentUser} />
      </Router>
    );

    expect(wrapper.props().children.props.posting).toBe(post);
    expect(wrapper.props().children.props.setUserOfActivePage).toBe(currentUser);
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
