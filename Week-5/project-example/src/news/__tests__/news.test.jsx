import React from 'react'
import { shallow } from 'enzyme'
import moxios from 'moxios'
import 'jest-enzyme';

import {News} from '../news'

describe('test News', () => {
    beforeEach(() => {
        moxios.install()
    });

    afterEach(() => {
        moxios.uninstall()
    });

    it('render shalow', (done)=> {
        const newProps = {
            selectedArticle: 'state.article',
            news: [],
            isLoading: false,
            isFailed: false
        };
        const wrapper = shallow(<News {...newProps} />);

        const testInstance = wrapper.instance();

        testInstance.handleLoadNews();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {},
            }).then((res) => {

                testInstance.setState({
                    isLoading: false,
                });
                expect(wrapper).toMatchSnapshot();
                done();
            })
        })
    })
});
