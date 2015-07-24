require('./app.styl');

var a = {
  ['a' + (() => 2)()] : 2
};

const lala = () => { console.log(this, 1); }


console.log(::alert());

console.log(a);

import React from 'react';
import Test from './Test';

React.render(<Test />, document.body);
