import React from 'react';
import { mount } from 'enzyme';
import SearchSvg from '../SearchSvg';

describe('<SearchSvg />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<SearchSvg />);
    expect(wrapper).toMatchSnapshot();
  });
})

