import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';

describe('<MovieCard> Start Component Test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MovieCard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})