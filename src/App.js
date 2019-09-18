import React, { Component } from 'react';
// import { Table, Input } from 'antd';
import Bank from './component/bank';
import Toast from './component/toast';
import ArrowSlide from './component/arrow-slide';
import './index.css';
import './fonts/iconfontnew.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Bank /> */}
        {/* <Toast
         msg="操作成功"
         time={2000}
        /> */}
        <ArrowSlide itemLable itemsName='视力'>
          <div>here is 视力内容</div>
        </ArrowSlide>
      </div>
    );
  }
}

export default App;
