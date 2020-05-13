import React from 'react';
import { mount } from 'enzyme';
import EditComment from '../EditComment';
import { comments, currentUser } from '../../Variables';

describe('<EditComment />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <EditComment
        posting={comments}
        indexOfCommentOnThisPosting={0}
        currentUser={currentUser}
      />
    );

    expect(wrapper.props().posting).toBe(comments);
    expect(wrapper.props().indexOfCommentOnThisPosting).toBe(0);
    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.html()).toMatch('<input');
    expect(wrapper.html()).toMatch('<button');
    expect(wrapper.text()).toMatch('Edit');
    expect(wrapper).toMatchSnapshot();
  });
});
