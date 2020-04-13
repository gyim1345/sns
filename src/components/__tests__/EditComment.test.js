import React from 'react';
import { mount } from 'enzyme';
import EditComment from '../EditComment';
import { comments, currentUser } from './testjs';

describe('<EditComment />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <EditComment
        posting={comments}
        indexOfCommentOnThisPosting={0}
        currentUser={currentUser}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
