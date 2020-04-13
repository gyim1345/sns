import React from 'react';
import { mount } from 'enzyme';
import FileUpload from '../FileUpload';
import { post, currentUser } from './testjs';

describe('<FileUpload />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(
      <FileUpload posting={post} currentUser={currentUser} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
