import React from 'react';
import { mount } from 'enzyme';
import Register from '../Register';
import { BrowserRouter as Router } from 'react-router-dom';

import MutationObserver from 'mutation-observer';
global.MutationObserver = MutationObserver;

describe('<Register />', () => {
  it('renders <form>', () => {
    const wrapper = mount(
      <Router key="TEST_KEY">
        <Register />
      </Router>
    );

    expect(wrapper.html()).toMatch('<form');
    expect(wrapper).toMatchSnapshot();
  });
});
