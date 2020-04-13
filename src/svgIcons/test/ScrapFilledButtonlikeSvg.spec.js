import React from 'react';
import { mount } from 'enzyme';
import ScrapFilledButton from '../ScrapFilledButton';

describe('<ScrapFilledButton />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<ScrapFilledButton />);
    expect(wrapper).toMatchSnapshot();
  });
})

