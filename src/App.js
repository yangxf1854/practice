import React, { Component } from 'react';
// import { Table, Input } from 'antd';
import Bank from './component/bank';
import Toast from './component/toast';
import ArrowSlide from './component/arrow-slide';
import Input from './component/input';
import Refresh from './component/refresh';
import './index.less';
import './fonts/iconfontnew.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.fetchList();
    // }, 3000);
    // TestClass.latest();
  }

  fetchList = () => {
    console.log('11');
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
        {/* <Input
          placeholder="请输入学生编号"
          onChange={this.handleChange}
          prefix="¥"
          suffix=".00"
          allowClear
        /> */}
        {/* <Refresh /> */}
      </div>
    );
  }
}

export default App;
