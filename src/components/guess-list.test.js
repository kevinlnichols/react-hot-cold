import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './aural-status';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList />);
    });
});