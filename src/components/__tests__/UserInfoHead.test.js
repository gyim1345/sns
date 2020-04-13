import React from 'react';
import { mount } from 'enzyme';
import UserInfo from '../UserInfo';
import { currentUser, info, post } from './testjs';

describe('<UserInfo />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <UserInfo user={currentUser} info={info} posting={post} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
