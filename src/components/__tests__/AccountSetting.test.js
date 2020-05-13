import React from 'react';
import { mount, shallow, render } from 'enzyme';
import AccountSetting from '../AccountSetting';
import { info } from '../../Variables';

describe('<AccountSetting />', () => {
  it('renders info', () => {
    const wrapper = mount(<AccountSetting info={info} />);
    expect(wrapper.props().info).toBe(info);
    expect(wrapper.text()).toMatch('사용자 이름');
    expect(wrapper.text()).toMatch('소개');
    expect(wrapper.text()).toMatch('프로필 사진 수정');
    expect(wrapper.text()).toMatch('수정');
    expect(wrapper.text()).toMatch(`${info.introductory}`);
    expect(wrapper.html()).toContain(`${info.nickName}`);
    expect(wrapper).toMatchSnapshot();
  });
});
