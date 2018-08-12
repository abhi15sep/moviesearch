import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';

describe('<AppContainer> Start Component Test', () => {
    it('renders without crashing', () => {
        const history = createMemoryHistory('/searchpage')
        const location = { pathname: '/searchpage' };
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter initialEntries={['/random']}>
            <AppContainer location={location} history={history} />
        </MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})