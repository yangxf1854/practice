import React, { Component } from 'react';
// import { Table, Input } from 'antd';
import Bank from './component/bank';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Bank />
      </div>
    );
  }
}

export default App;
