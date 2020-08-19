import '../styles/index.scss';
import { accordion } from '../accordion/accordion.js';

accordion('accordion-trigger');

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}


console.log('webpack starterkit');