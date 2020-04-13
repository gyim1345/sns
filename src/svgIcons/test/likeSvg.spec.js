import React from 'react';
import { mount } from 'enzyme';
import LikeSvg from '../LikeSvg';

describe('<LikeSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<LikeSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

