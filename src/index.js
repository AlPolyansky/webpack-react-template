import React from 'react';
import {render} from 'react-dom';
import Test from './test';
import Test2 from './test2';

render(
    <div>
        Hello world
        <Test />
        <Test2 />
    </div>,
    document.getElementById('app')
);


// Позволяет обновлять react компоненты без потери данных
module.hot.accept();