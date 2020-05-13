import React from 'react';
import { mount } from 'enzyme';
import Addpost from '../Addpost';
import { MemoryRouter, Route } from 'react-router-dom';
import { currentUser, posts } from '../../Variables';

describe('<Addpost />', () => {
  describe('with user of userPage matching the session user', () => {
    it('renders <input>, <button>, and "Add Post"', () => {
      const wrapper = mount(
        <MemoryRouter
          initialEntries={[{ pathname: '/gibong@gmail.com', key: 'testKey' }]}
        >
          <Route exact path="/:user">
            <Addpost
              currentUser={currentUser}
              posting={posts}
              // match={{ params: { user: currentUser } }}
            />
          </Route>
        </MemoryRouter>
      );
      expect(wrapper.props().children.props.children.props.posting).toBe(posts);
      expect(wrapper.props().children.props.children.props.currentUser).toBe(currentUser);
      expect(wrapper.html()).toMatch('<input');
      expect(wrapper.html()).toMatch('<button');
      expect(wrapper.text()).toMatch('Add Post');
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('without user of userPage matching the session user', () => {
    it('renders nothing', () => {
      const wrapper = mount(
        <MemoryRouter
          initialEntries={[{ pathname: '/guy@gmail.com', key: 'testKey' }]}
        >
          <Route exact path="/:user">
            <Addpost
              currentUser={currentUser}
              posting={posts}
              match={{ params: { user: currentUser } }}
            />
          </Route>
        </MemoryRouter>
      );

      expect(wrapper.html()).toMatch('');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
