import React from 'react';
import { mount, shallow } from 'enzyme';
import ModalBoxComment from '../ModalBoxComment';
import { comments, currentUser } from '../../Variables';
import Modal from 'react-modal';


describe('<ModalBoxComment />', () => {
  it('renders <svg>', () => {
    const wrapper = mount(
      <ModalBoxComment
        currentUser={currentUser}
        commentAPI={comments}
        indexOfCommentOnThisPosting={0}
      />
    );

    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.props().commentAPI).toBe(comments);
    expect(wrapper.props().indexOfCommentOnThisPosting).toBe(0);
    expect(wrapper.html()).toMatch('<svg');
    expect(wrapper).toMatchSnapshot();
  });
});
