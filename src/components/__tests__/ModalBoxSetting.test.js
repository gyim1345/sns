import React from 'react';
import { mount } from 'enzyme';
import ModalBoxSetting from '../ModalBoxSetting';
import { info } from '../../Variables';

describe('<ModalBoxSetting />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(<ModalBoxSetting info={info} />);

    expect(wrapper.props().info).toBe(info)
    expect(wrapper.html()).toMatch('<svg')
    expect(wrapper).toMatchSnapshot();
  });
});
