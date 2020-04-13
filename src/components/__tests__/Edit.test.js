import React from 'react';
import { mount } from 'enzyme';
import Edit from '../Edit';
import { post, currentUser } from './testjs';

describe('<Edit />', () => {
  it('스냅샷 비교', () => {
    const input = 'INPUT';
    const wrapper = mount(
      <Edit input={input} posting={post} currentUser={currentUser} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
