import React from 'react';
import { mount } from 'enzyme';
import RemoveComment from '../RemoveComment';
import { comments } from '../../Variables';

describe('<RemoveComment />', () => {
  it('renders <button> and "Remove"', () => {
    const wrapper = mount(
      <RemoveComment posting={comments} indexOfCommentOnThisPosting={0} />
    );

    expect(wrapper.props().posting).toBe(comments);
    expect(wrapper.props().indexOfCommentOnThisPosting).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });
});
