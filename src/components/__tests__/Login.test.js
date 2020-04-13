import React from 'react';
import { mount } from 'enzyme';
import Login from '../Login';
import { currentUser } from './testjs';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'

describe('<Login />', () => {
    const newHistory = createBrowserHistory();

  it('스냅샷 비교', () => {
      
    const wrapper = mount(
    //   <Router history={newHistory}>
    <MemoryRouter>
        <Login currentUser={currentUser} loggedIn={true} />
        </MemoryRouter>
    //   </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
