import React from 'react';
import { mount } from 'enzyme';
import PostsForPostPage from '../PostsForPostPage';
import { posts } from './testjs';
import { MemoryRouter } from 'react-router-dom';

describe('<PostsForPostPage />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[{ pathname: '/gibong@gmail.com', key: 'testKey' }]}
      >
        <PostsForPostPage posting={posts} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
