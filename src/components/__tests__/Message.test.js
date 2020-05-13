import React from 'react';
import { mount } from 'enzyme';
import Message from '../Message';

describe('<Message />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Message msg={'Message'} />);

    expect(wrapper.props().msg).toMatch('Message');
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper.text()).toMatch('Message');
    expect(wrapper).toMatchSnapshot();
  });
});
