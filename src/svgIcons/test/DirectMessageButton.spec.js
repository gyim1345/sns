import React from 'react';
import { mount } from 'enzyme';
import DirectMessageSvg from '../DirectMessageSvg';

describe('<DirectMessageSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<DirectMessageSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

