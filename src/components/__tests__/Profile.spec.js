import React from 'react';
import { mount } from 'enzyme';
import Profile from '../Profile';

describe('<Profile />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<Profile id={'id'} name={'kim'} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('렌더 props 비교', () => {
    const wrapper = mount(<Profile id={'id'} name={'kim'} />);
    console.log(wrapper.props());
    expect(wrapper.props().id).toBe('id');
    expect(wrapper.props().name).toBe('kim');

    const boldElement = wrapper.find('b'); // find(): 특정 DOM 선택 가능 querySelector같음
    expect(boldElement.contains('id')).toBe(true); //contains(): innerText같은 안의 값이 id인지
    const spanElement = wrapper.find('span');
    expect(spanElement.text()).toBe('kim'); //text(): span의 innerText 같은 기능.
  });
});
