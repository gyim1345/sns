import React from 'react';
import { mount } from 'enzyme';
import TimeLineSvg from '../TimeLineSvg';

describe('<TimeLineSvg />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<TimeLineSvg />);

    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
})

