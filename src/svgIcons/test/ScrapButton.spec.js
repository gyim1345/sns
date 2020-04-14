import React from 'react';
import { mount } from 'enzyme';
import ScrapButton from '../ScrapButton';

describe('<ScrapButton />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<ScrapButton />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

