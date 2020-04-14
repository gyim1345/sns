import React from 'react';
import { mount } from 'enzyme';
import UserInfo from '../UserInfo';
import { currentUser, currentUserName } from '../../Variables';

describe('<UserInfo />', () => {
  it('renders <div> and texts', () => {
    const wrapper = mount(<UserInfo user={currentUser} />);

    expect(wrapper.props().user).toBe(currentUser);
    expect(wrapper.text()).toMatch(currentUserName);
    expect(wrapper.text()).toMatch('스토리');
    expect(wrapper.text()).toMatch('회원님이 팔로우하는 사람들의 스토리가 여기에 표시 안됩니다.');
    expect(wrapper.text()).toMatch('회원님을 위한 추천');
    expect(wrapper.text()).toMatch('recommendation');
    expect(wrapper.text()).toMatch('팔로우');
    expect(wrapper.text()).toMatch('Test');
    expect(wrapper.text()).toMatch('소개-도움말-홍보센터-API-채용정보-개인정보처리방침-약관-위치-인기계정-해시태그-언어');
    expect(wrapper.text()).toMatch('© 2020 BONGSTAGRAM');
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
