import React from 'react';
import { mount } from 'enzyme';
import PostImagesOnly from '../PostImagesOnly';

describe('<PostImagesOnly />', () => {
  it('it renders <div>', () => {
    const wrapper = mount(<PostImagesOnly imageUrl={'URL'} />);

    expect(wrapper.props().imageUrl).toBe('URL');
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper).toMatchSnapshot();
  });
});
