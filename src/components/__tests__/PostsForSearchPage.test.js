import React from 'react';
import { mount } from 'enzyme';
import PostsForSearchPage from '../PostsForSearchPage';
import { post, currentUser } from './testjs';
import { MemoryRouter } from 'react-router-dom';

describe('<PostsForSearchPage />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/1', key: 'testKey' }]}>
        <PostsForSearchPage posting={post} setUserOfActivePage={currentUser} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
