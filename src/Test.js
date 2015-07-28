import React, { Component } from 'react';

export default class Test extends Component {
  static PropTypes = {
    count: React.PropTypes.number
  }
  state = { test: 200};

  constructor(props) {
    super(props);

    // this.state = {
    //   'test': 10
    // };

    this.tick();
  }


  tick () {
    setInterval( () => this.setState({'test': this.state.test + Math.random() * 10 }), Math.random() * 1000);
  }

  render() {
    return (
      <div>
        <Input placeholder="wosadasdw" />
        <h1>hello hi world worasdks {this.state.test}</h1>
      </div>
    );
  }
}

class Input extends Component {
  test = 12;

  constructor () {
    super();
  }

  handleChange (event) {
    console.log(event.target.value);
  }

  render () {
    return (
      <div>
        <input
          type="text" {...this.props}
          ref="el"
          onChange={::this.handleChange}
          value={this.test}
        />
        <MyComponent test="wow" lala="" source={this}>
          hello world sd
        </MyComponent>
      </div>
    );
  }
}


class MyComponent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props.source.refs.el.getDOMNode());
  }

  render() {
    return (
      <div>
      <h4>{this.props.test}</h4>
      <p>{this.props.lala}</p>
      <button ref="b"></button>
      {this.props.children}
      </div>
    );
  }
}
