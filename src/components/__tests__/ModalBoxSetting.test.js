import React from 'react';
import { mount } from 'enzyme';
import ModalBoxSetting from '../ModalBoxSetting';
import { info } from './testjs';

describe('<ModalBoxSetting />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<ModalBoxSetting info={info} />);
    expect(wrapper).toMatchSnapshot();
  });
});
