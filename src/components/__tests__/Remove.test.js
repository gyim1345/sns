import React from 'react';
import { mount } from 'enzyme';
import Remove from '../Remove';
import { post, currentUser } from '../../Variables';

describe('<Remove />', () => {
  it('renders <button> and "Remove"', () => {
    const wrapper = mount(<Remove posting={post} currentUser={currentUser} />);

    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.text()).toMatch('Remove');
    expect(wrapper.html()).toMatch('<button');
    expect(wrapper).toMatchSnapshot();
  });
});
