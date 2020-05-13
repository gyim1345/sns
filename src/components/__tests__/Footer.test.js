import React from 'react';
import { mount } from 'enzyme';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('renders texts', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.text()).toMatch('소개');
    expect(wrapper.text()).toMatch('도움말');
    expect(wrapper.text()).toMatch('홍보 센터');
    expect(wrapper.text()).toMatch('API');
    expect(wrapper.text()).toMatch('채용 정보');
    expect(wrapper.text()).toMatch('개인정보처리방침');
    expect(wrapper.text()).toMatch('약관');
    expect(wrapper.text()).toMatch('위치');
    expect(wrapper.text()).toMatch('인기 계정');
    expect(wrapper.text()).toMatch('추천 계정');
    expect(wrapper.text()).toMatch('해시태그');
    expect(wrapper.text()).toMatch('언어');
    expect(wrapper.text()).toMatch('© 2020 BONGSTAGRAM');
    expect(wrapper).toMatchSnapshot();
  });
});
