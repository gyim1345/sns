import React from 'react';
import { mount } from 'enzyme';
import Login from '../Login';
import { currentUser } from '../../Variables';
import { BrowserRouter as Router } from 'react-router-dom';

import MutationObserver from 'mutation-observer'
global.MutationObserver = MutationObserver 

describe('<Login />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <Router key="TEST_KEY">
        <Login currentUser={currentUser} loggedIn={true} />
      </Router>
    );

    expect(wrapper.props().children.props.currentUser).toBe(currentUser);
    expect(wrapper.props().children.props.loggedIn).toBe(true);
    expect(wrapper.text()).toMatch('Bongstagram');
    expect(wrapper.text()).toMatch('또는');
    expect(wrapper.html()).toMatch('<form');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
