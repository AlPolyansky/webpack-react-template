import React from 'react';
import {render} from 'react-dom';
import App from './js/App';

render(
    <App />,
    document.getElementById('app')
);


// Позволяет обновлять react компоненты без потери данных
module.hot.accept();