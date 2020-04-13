import React from 'react';
import { mount } from 'enzyme';
import RemoveComment from '../RemoveComment';
import { comments } from './testjs';

describe('<RemoveComment />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <RemoveComment posting={comments} indexOfCommentOnThisPosting={0} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
