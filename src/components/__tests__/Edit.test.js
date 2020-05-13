import React from 'react';
import { mount } from 'enzyme';
import Edit from '../Edit';
import { post, currentUser } from '../../Variables';

describe('<Edit />', () => {
  it('renders <input>, <button>, and "Edit"', () => {
    const input = 'INPUT';
    const wrapper = mount(
      <Edit input={input} posting={post} currentUser={currentUser} />
    );

    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.props().input).toBe(input);
    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.html()).toMatch('<input');
    expect(wrapper.html()).toMatch('<button');
    expect(wrapper.text()).toMatch('Edit');
    expect(wrapper).toMatchSnapshot();
  });
});
