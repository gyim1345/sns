import React from 'react';
import { mount } from 'enzyme';
import ScrapButton from '../ScrapButton';

describe('<ScrapButton />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<ScrapButton />);
    expect(wrapper).toMatchSnapshot();
  });
})

