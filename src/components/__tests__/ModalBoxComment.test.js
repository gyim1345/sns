import React from 'react';
import { mount } from 'enzyme';
import ModalBoxComment from '../ModalBoxComment';
import { comments, currentUser } from './testjs';

describe('<ModalBoxComment />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <ModalBoxComment
        currentUser={currentUser}
        commentAPI={comments}
        indexOfCommentOnThisPosting={0}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
