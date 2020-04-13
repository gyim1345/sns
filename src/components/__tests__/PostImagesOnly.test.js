import React from 'react';
import { mount } from 'enzyme';
import PostImagesOnly from '../PostImagesOnly';
import { info } from './testjs';

describe('<PostImagesOnly />', () => {
  it('스냅샷 비교', () => {
    const wrapper = mount(<PostImagesOnly imageUrl={'URL'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
