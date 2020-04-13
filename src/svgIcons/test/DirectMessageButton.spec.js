import React from 'react';
import { mount } from 'enzyme';
import DirectMessageSvg from '../DirectMessageSvg';

describe('<DirectMessageSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<DirectMessageSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

