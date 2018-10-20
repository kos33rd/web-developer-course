import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'

import {Layout} from '../layout'

describe('testing Layout component', () => {

    it('test render layout component', () => {
        const initialState = {
            news: []
        };
        const mockStore = createStore([]);
        const store = mockStore(initialState);

        const container = renderer
            .create(<Provider store={store}>
                    <Router>
                        <Layout/>
                    </Router>
                </Provider>
                , {
                    createNodeMock: ({type}) => document.createElement(type)
                });
        const testInstance = container.getInstance();
        // testInstance.someMethod();
        expect(container.toJSON()).toMatchSnapshot();
    });
});

