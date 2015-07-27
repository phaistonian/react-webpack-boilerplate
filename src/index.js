import React, { Component, PropTypes } from 'react';
import Test from './Test';
require('./app.styl');

var a = {
  ['a' + (() => 2)()] : 2
};

const lala = () => { console.log(this, 1); }


console.log(Component);

console.log(a);





React.render(<Test />, document.body);
