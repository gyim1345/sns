import React from 'react';
import { shallow } from 'enzyme';
import Addpost from '../Addpost';
import { MemoryRouter } from 'react-router-dom';
import { currentUser } from './testjs';


describe('<Addpost />', () => {
  it('스냅샷 비교', () => {
    const wrapper = shallow(
      <MemoryRouter
        initialEntries={[{ pathname: '/gibong@gmail.com', key: 'testKey' }]}
      >
        <Addpost currentUser={currentUser} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
