import React from 'react';
import { mount } from 'enzyme';
import Scrap from '../Scrap';

describe('<Scrap />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Scrap posting={3} />);
    expect(wrapper).toMatchSnapshot();
  });
});
