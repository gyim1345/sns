import React from 'react';
import { mount } from 'enzyme';
import PostsForPostPage from '../PostsForPostPage';
import { posts } from '../../Variables';
import { MemoryRouter, Route } from 'react-router-dom';

describe('<PostsForPostPage />', () => {
  it('renders <div> and texts', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[{ pathname: '/gibong@gmail.com', key: 'testKey' }]}
      >
        <Route exact path="/:user">
          <PostsForPostPage posting={posts} />
        </Route>
      </MemoryRouter>
    );

    expect(wrapper.props().children.props.children.props.posting).toBe(posts);
    expect(wrapper.text()).toMatch('게시물');
    expect(wrapper.text()).toMatch('스크랩');
    expect(wrapper.text()).toMatch('태그됨');
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
