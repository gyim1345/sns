import React from 'react';
import { mount } from 'enzyme';
import ModalAddpost from '../ModalAddpost';
import { currentUser } from '../../Variables';
import { MemoryRouter, Route } from 'react-router-dom';

describe('<ModalAddpost />', () => {
  it('renders <input>, <button>, and "Add Post"', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[{ pathname: '/gibong@gmail.com', key: 'testKey' }]}
      >
        <Route exact path="/:user">
          <ModalAddpost currentUser={currentUser} />
        </Route>
      </MemoryRouter>
    );

    expect(wrapper.text()).toMatch('Add Post');
    expect(wrapper.html()).toMatch('<input');
    expect(wrapper.html()).toMatch('<button');
    expect(wrapper).toMatchSnapshot();
  });
});
