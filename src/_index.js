import React, { Component, PropTypes } from 'react';
import Test from './Test';
require('./app.styl');

var a = {
  ['a' + (() => 2)()]: 2
};



console.log(Component);

console.log(a);



const rep = function () {
  let i = document.createElement('div');
  i.innerHTML = `hello`;
  document.body.appendChild(i);
};



const last = (collection) => collection[collection.length - 1];

for (let i = 0; i < 10; i = i + 1) {
  rep();
  React.render(
    <Test key={'component_' + i} />,
    last(document.querySelectorAll('div'))
  );
}




