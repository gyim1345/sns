import React from 'react';
import { mount } from 'enzyme';
import Remove from '../Remove';
import { post } from './testjs';

describe('<Remove />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Remove posting={post} />);
    expect(wrapper).toMatchSnapshot();
  });
});
