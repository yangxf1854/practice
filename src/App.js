import React, { Component } from 'react';
// import { Table, Input } from 'antd';
import Bank from './component/bank';
import Toast from './component/toast';
import ArrowSlide from './component/arrow-slide';
import Input from './component/input';
import './index.css';
import './fonts/iconfontnew.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  handleChange = (e) => {
    // console.log(e.target.value);
  }

  render() {
    return (
      <div>
        {/* <Bank /> */}
        {/* <Toast
         msg="操作成功"
         time={2000}
        /> */}
        {/* <ArrowSlide itemLable itemsName='视力'>
          <div>here is 视力内容</div>
        </ArrowSlide> */}
        <Input
          placeholder="请输入"
          onChange={this.handleChange}
          prefix="前缀"
          suffix="后缀"
          allowClear
        />
      </div>
    );
  }
}

export default App;
