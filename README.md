# To copy from source
`git clone Boilerplate MY_PROJECT && cd MY_PROJECT && rm -rf .git`


## tools

## deploy

## guides

## watchpack
- *SOS* When web packing does not take place, try webpack again (run it)
- http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup

## ES6
- http://cl.ly/image/41121J2n130g - http://d.pr/i/tl3e
- https://hacks.mozilla.org/2015/07/es6-in-depth-classes/?utm_source=javascriptweekly&utm_medium=email

## ES7
- Object.observe
- https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
- https://github.com/zenparsing/es-function-bind (strawman)

## REACT
- https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
- http://davidandsuzi.com/what-we-can-learn-from-react/
- https://reactjsnews.com/react-style-guide-patterns-i-like/
- http://d.pr/i/1e5ir [tip]
- http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/ [video]
- https://egghead.io/lessons/react-react-in-7-minutes [video]
- http://racingtadpole.com/blog/flux-react-best-practices/
- https://github.com/emmenko/redux-react-router-async-example

## Redux
- http://davidandsuzi.com/writing-a-basic-app-in-redux/
- https://github.com/gaearon/redux/blob/rewrite-docs/docs/Reference/API.md
- https://github.com/gaearon/redux#simple-examples
- https://github.com/gaearon/redux/tree/rewrite-docs
- https://github.com/quangbuule/redux-example
- https://github.com/gaearon/redux/blob/rewrite-docs/docs/Reference/Glossary.md (glossary)

## Misc
- http://jakearchibald.com/2015/thats-so-fetch/
- https://github.com/rwaldron/idiomatic.js/blob/master/readme.md
- http://cycle.js.org/
- https://github.com/gaearon/normalizr


## CSS

### misc rules
- Animate everything

### global
- loading (data-loading)

### Vars

* $input-border-radius
* $input-padding
* $input-hover-color-pct


# projects
- https://github.com/fdecampredon/rx-flux
- https://github.com/Reactive-Extensions/RxJS
- http://leafletjs.com/reference.html#map-options


# Articles and posts
- https://madebymany.com/blog/beyond-the-to-do-app-writing-complex-applications-using-flux-react-js (must read)
- http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/

# normalizr
- https://www.youtube.com/watch?v=I7IdS-PbEgI&app=desktop

# NODE
- https://github.com/acdlite/flummox/blob/master/docs/src/scripts/build-static-site.js

# Testing
- https://travis-ci.org/
- http://karma-runner.github.io/0.13/index.html



## Lifecycle

### componentWillMount
Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.

### componentDidMount
Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, the component has a DOM representation which you can access via React.findDOMNode(this).

If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.

### componentWillReceiveProps
Invoked when a component is receiving new props. This method is not called for the initial render.

Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState(). The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.

### shouldComponentUpdate
Invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used.

Use this as an opportunity to return false when you’re certain that the transition to the new props and state will not require a component update.

### componentWillUpdate
Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.

Use this as an opportunity to perform preparation before an update occurs.

### componentDidUpdate
Invoked immediately after the component’s updates are flushed to the DOM. This method is not called for the initial render.

Use this as an opportunity to operate on the DOM when the component has been updated.

### componentWillUnmount
Invoked immediately after the component’s updates are flushed to the DOM. This method is not called for the initial render.

Use this as an opportunity to operate on the DOM when the component has been updated
