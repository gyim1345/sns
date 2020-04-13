import React from 'react';
import { mount } from 'enzyme';
import Register from '../Register';

describe('<Register />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Register />);
    expect(wrapper).toMatchSnapshot();
  });
});
