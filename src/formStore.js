import React ,{Component } from 'react';

import {createStore} from 'redux';
import reducer from './formReducer';

const store = createStore(reducer);

export default store;