import React from 'react';
import { mount } from 'enzyme';
import ModalBoxAdd from '../ModalBoxAdd';
import { post, currentUser } from './testjs';

describe('<ModalBoxAdd />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <ModalBoxAdd currentUser={currentUser} posting={post} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
