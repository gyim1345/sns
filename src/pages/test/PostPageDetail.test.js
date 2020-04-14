import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import PostPageDetail from '../PostPageDetail';
import { currentUser } from '../../Variables';

describe('<PostPageDetail />', () => {
  it('renders <div>', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/1', key: 'testKey' }]}>
        <Route exact path="/:id">
          <PostPageDetail
            currentUser={currentUser}
            UserOfActivePage={currentUser}
          />
        </Route>
      </MemoryRouter>
    );

    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
