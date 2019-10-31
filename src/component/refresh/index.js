import React, { Component } from 'react'
import moment from 'moment';

let timeout = null;
// 自动刷新组件
export default class Refresh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefresh: false, // 是否自动刷新
      refreshTime: `${moment().hour()}:${moment().minute()}:${moment().second()}`
    }
  }
  componentDidMount() {
    // 请求数据
    // this.fetchData();
  }

  // 请求数据
  fetchData = () => {
    console.log('data');
  }
  
  // 刷新
  handleButton = () => {
    this.setState({
      isRefresh: !this.state.isRefresh
    }, () => {
      this.handleRefresh();
    });
  }

  // 自动刷新
  handleRefresh = () => {
    const isRefresh = this.state.isRefresh;
    console.log(isRefresh);
    if (isRefresh) {
      timeout = setTimeout(() => {
        this.fetchData();
        this.handleRefresh();
        this.setState({
          refreshTime: `${moment().hour()}:${moment().minute()}:${moment().second()}`
        });
      }, 3000);
    } else {
      clearTimeout(timeout);
    }
  }

 componentWillUnmount() {
  clearTimeout(timeout);
 }

  render() {
    const { refreshTime } = this.state;
    return (
      <div style={{ marginTop: '10px' }}>
        <button onClick={this.handleButton}>自动刷新</button>
        <span>今日刷新时间：{refreshTime}</span>
      </div>
    )
  }
}
