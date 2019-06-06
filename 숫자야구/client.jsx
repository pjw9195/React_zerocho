import React from 'react';
import ReactDom from 'react-dom';

import Baseball from './Baseball';
import { hot } from 'react-hot-loader/root';
const Hot = hot(Baseball);
ReactDom.render(<Hot />, document.querySelector('#root'));
