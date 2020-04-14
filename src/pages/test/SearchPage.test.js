import React from 'react';
import { mount } from 'enzyme';
import SearchPage from '../SearchPage';
import { currentUser } from '../../Variables';

describe('<SearchPage />', () => {
  it('renders <form> and <div>', () => {
    const wrapper = mount(<SearchPage currentUser={currentUser} />);

    expect(wrapper.html()).toMatch('<form');
    expect(wrapper.html()).toMatch('<div');
    expect(wrapper.text()).toMatch('찾기')
    expect(wrapper).toMatchSnapshot();
  });
});
