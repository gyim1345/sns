import React from 'react';
import { mount } from 'enzyme';
import Scrap from '../Scrap';

describe('<Scrap />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<Scrap postingId={3} />);

    expect(wrapper.props().postingId).toBe(3);
    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
});
