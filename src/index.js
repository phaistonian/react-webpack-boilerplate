import React, { Component, PropTypes } from 'react';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { provide, connect } from 'react-redux';
import thunk from 'redux-thunk';


const initialState = 2;


// The reducer
function counter (state = initialState, action) {
  switch (action.type) {

    case 'ADD':
      return state + action.amount;
    case 'DEL':
      return state - 1;

    default:
      return state;
  }
}

// The actioncreators
const ActionCreators = {
  add (amount = 1) {
    return {
      type: 'ADD',
      amount
    };
  },

  del () {
    return {
      type: 'DEL'
    };
  },

  asyncAdd () {
    return (dispatch) => {
      setTimeout(() =>
        dispatch(ActionCreators.add()),
        9000);
    };
  },

  asyncFetch () {
    return (dispatch, getState) => {
      console.log(getState());
      return fetch('http://www.reddit.com/r/apple.json')
              .then((res) => res.json())
              .then((json) => dispatch(ActionCreators.add(json.data.children.length)));
    };
  },

  asyncFetchAwait () {
    return async dispatch => {
      const result = await fetch('http://www.reddit.com/r/apple.json'),
            json = await result.json();

      dispatch(ActionCreators.add(json.data.children.length));
    };
  }

};

// the stores
// const store = createStore(counter);
const createStoreWidthMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWidthMiddleWare(counter);


const actions = bindActionCreators(ActionCreators, store.dispatch);

store.dispatch({type: 'ADD', amount: 1 });
// store.dispatch({type: 'ADD' });
store.dispatch(ActionCreators.add());
store.dispatch(ActionCreators.add());

store.dispatch(ActionCreators.asyncAdd());
store.dispatch(ActionCreators.asyncFetch());
store.dispatch(ActionCreators.asyncFetchAwait());

store.subscribe(() => {
  console.log('edw', store.getState());
});

console.log(store.getState());


// Provides the store to the whole tree (context)
@provide(store)
@connect(state => ({counter: state, blah: 2}))
class MyComponent extends Component {
  render () {
    console.log('props heere', this.props);
    return (
      <MyChildComponent />
    );
  }
}

@connect(state => ({counter: state, blue: 14}))
// @connect(state => ({state}))
// @connect(state => state);
// @connect(state => ({state, blue: 4});
// @connect(state => ({counter: state, blue: 14}))
class MyChildComponent extends Component {
  render () {
    return (
      <div>
        <h1>hello world {this.props.counter}</h1>
        <MyNestedComponent />
      </div>
    );
  }
}


@connect(state => ({state}))
class MyNestedComponent extends Component {
  render () {
    console.log('edeeeeew', this.props);
    return <h2>hi then!</h2>;
  }
}

React.render(<MyComponent />, document.body);
