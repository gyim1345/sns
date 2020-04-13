import React from 'react';
import { mount } from 'enzyme';
import LikeFilledSvg from '../LikeFilledSvg';

describe('<LikeFilledSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<LikeFilledSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

