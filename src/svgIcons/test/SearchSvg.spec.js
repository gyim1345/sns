import React from 'react';
import { mount } from 'enzyme';
import SearchSvg from '../SearchSvg';

describe('<SearchSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<SearchSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

