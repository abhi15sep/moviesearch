import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { shallow } from 'enzyme';

describe('<Navbar> Start Component Test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Navbar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Active class will be appeneded when activeId match nav id', () => {
        const wrapper = shallow(<Navbar navs={[
            {
                id: 0,
                label: 'Home'
            },
            {
                id: 1,
                label: 'Movie'
            }
        ]} activeId={1}></Navbar>);

        expect(wrapper.find('.active').length).toBe(1);
    });

    it('Active class will be appeneded when activeId match nav id', () => {
        const wrapper = shallow(<Navbar navs={[
            {
                id: 0,
                label: 'Home'
            },
            {
                id: 1,
                label: 'Movie'
            }
        ]} activeId={-1}></Navbar>);

        expect(wrapper.find('.active').length).toBe(0);
    });

    it('Should only render two nav items', () => {
        const wrapper = shallow(<Navbar navs={[
            {
                id: 0,
                label: 'Home'
            },
            {
                id: 1,
                label: 'Movie'
            }
        ]} activeId={1}></Navbar>);
        expect(wrapper.find('li').length).toBe(2);
    });
})