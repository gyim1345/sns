import React from 'react';
import { mount } from 'enzyme';
import ModalBox from '../ModalBox';
import { post, currentUser } from '../../Variables';

describe('<ModalBox />', () => {
  it('renders <svg>', () => {
    const input = 'INPUT';
    const wrapper = mount(
      <ModalBox currentUser={currentUser} posting={post} input={input} />
    );
    
    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.props().input).toBe(input);
    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
});
