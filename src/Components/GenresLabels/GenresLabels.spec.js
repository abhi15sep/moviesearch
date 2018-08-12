import React from 'react';
import ReactDOM from 'react-dom';
import GenresLabels from './GenresLabels';
import { shallow } from 'enzyme';

describe('<GenresLabels> Start Component Test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GenresLabels />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should render two genres elements', () => {
        const wrapper = shallow(<GenresLabels genres={[
            {
                id: 0,
                label: 'Action'
            },
            {
                id: 1,
                label: 'Comic'
            }
        ]}></GenresLabels>);

        expect(wrapper.find('li').length).toBe(2);
    });
})