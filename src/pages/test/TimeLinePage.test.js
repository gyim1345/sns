import React from 'react';
import { mount } from 'enzyme';
import TimeLinePage from '../TimeLinePage';
import { currentUser } from '../../Variables';

describe('<TimeLinePage />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<TimeLinePage currentUser={currentUser} />);

    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
