import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import PostPage from '../PostPage';
import { currentUser } from '../../Variables';

describe('<PostPage />', () => {
  it('renders <div>', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[{ pathname: '/gibong@gmail.com', key: 'testKey' }]}
      >
        <Route exact path="/:user">
          <PostPage currentUser={currentUser} />
        </Route>
      </MemoryRouter>
    );

    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
