import React from 'react';
import { mount } from 'enzyme';
import TagSvg from '../TagSvg';

describe('<TagSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<TagSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

