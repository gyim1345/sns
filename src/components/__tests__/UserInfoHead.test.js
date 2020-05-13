import React from 'react';
import { mount } from 'enzyme';
import UserInfoHead from '../UserInfoHead';
import { currentUser, info, post, currentUserName } from '../../Variables';

describe('<UserInfoHead />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <UserInfoHead user={currentUser} info={info} posting={post} />
    );

    expect(wrapper.props().user).toBe(currentUser);
    expect(wrapper.props().info).toBe(info);
    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper.text()).toMatch(currentUserName);
    expect(wrapper.text()).toMatch('메시지 보내기');
    expect(wrapper.text()).toMatch('게시물');
    expect(wrapper.text()).toMatch('팔로우');
    expect(wrapper.text()).toMatch(`${info.followerNumber}`);
    expect(wrapper.text()).toMatch('팔로워');
    expect(wrapper.text()).toMatch('0');
    expect(wrapper).toMatchSnapshot();
  });
});
