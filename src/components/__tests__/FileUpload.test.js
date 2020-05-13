import React from 'react';
import { mount } from 'enzyme';
import FileUpload from '../FileUpload';
import { post, currentUser } from '../../Variables';

describe('<FileUpload />', () => {
  it('renders <form>', () => {
    const wrapper = mount(
      <FileUpload posting={post} currentUser={currentUser} />
    );

    expect(wrapper.props().currentUser).toBe(currentUser);
    expect(wrapper.props().posting).toBe(post);
    expect(wrapper.html()).toMatch('<form');
    expect(wrapper).toMatchSnapshot();
  });
});
