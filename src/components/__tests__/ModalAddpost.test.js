import React from 'react';
import { mount } from 'enzyme';
import ModalAddpost from '../ModalAddpost';
import { currentUser } from './testjs';
import { MemoryRouter } from 'react-router-dom';

describe('<ModalAddpost />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[{ pathname: '/gibong@gmail.com', key: 'testKey' }]}
      >
        <ModalAddpost currentUser={currentUser} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
