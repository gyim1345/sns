import React from 'react';
import { mount } from 'enzyme';
import ModalBox from '../ModalBox';
import { post, currentUser } from './testjs';

describe('<ModalBox />', () => {
  it('스냅샷 비교', () => {
    const input = 'INPUT';
    const wrapper = mount(
      <ModalBox currentUser={currentUser} posting={post} input={input} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
