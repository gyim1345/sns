import React from 'react';
import { mount } from 'enzyme';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
