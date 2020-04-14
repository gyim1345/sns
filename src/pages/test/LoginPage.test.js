import React from 'react';
import { mount } from 'enzyme';
import LoginPage from '../LoginPage';
import { currentUser } from '../../Variables';

import MutationObserver from 'mutation-observer'
global.MutationObserver = MutationObserver 

describe('<LoginPage />', () => {
  it('renders <div>', () => {
    const wrapper = mount(
      <LoginPage currentUser={currentUser} loggedIn={false} />
    );

    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.props().loggedIn).toBe(false);
    expect(wrapper.text()).toMatch('앱을 다운로드하지 마세요');
    expect(wrapper).toMatchSnapshot();
  });
});
