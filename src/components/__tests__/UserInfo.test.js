import React from 'react';
import { mount } from 'enzyme';
import UserInfo from '../UserInfo';
import { currentUser } from './testjs';

describe('<UserInfo />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<UserInfo user={currentUser} />);
    expect(wrapper).toMatchSnapshot();
  });
});
