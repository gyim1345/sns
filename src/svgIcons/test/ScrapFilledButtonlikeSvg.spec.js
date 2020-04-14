import React from 'react';
import { mount } from 'enzyme';
import ScrapFilledButton from '../ScrapFilledButton';

describe('<ScrapFilledButton />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<ScrapFilledButton />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

