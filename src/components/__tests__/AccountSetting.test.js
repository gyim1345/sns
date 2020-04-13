import React from 'react';
import { mount } from 'enzyme';
import AccountSetting from '../AccountSetting';
import { info } from './testjs'

describe('<AccountSetting />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<AccountSetting info={info} />);
    expect(wrapper).toMatchSnapshot();
  });
});
