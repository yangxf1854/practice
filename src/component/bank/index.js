
import React, { Component } from 'react';
import Util from '../../util';

const { 
  formatSplitString, 
  safeData 
} = Util;
const data = {
  code: 'FTH001',
  constructorCation: {
    company: '锅巴工作室',
    name: {
      lastname: '锅巴',
      firstname: '杨'
    }
  }
};
const objectList = [
  {
    name: '锅巴'
  }
]
class Bank extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
  }

  componentDidMount() {
    // console.log(safeData(objectList, 'name', ''), 'object-name');
  }

  cardChange = (eve) => {
    let value = eve.target.value;
        value = value.replace(/\s/g, '');
    this.setState({
        value,
    });
  }

  render() {
    const value = this.state.value;
    return (
        <div>
            <input 
              placeholder="请输入银行卡号"
              onChange={(eve) => this.cardChange(eve)}
              value={formatSplitString(value, 4, ' ')}
            /> 
            <div>
                <h6>公司编码：{safeData(data, 'code', '')}</h6>
                <h6>公司名称：{safeData(data, 'constructorCation.company', '')}</h6>
                <h6>公司法人：{safeData(data, 'constructorCation.name.firstname', '')}{safeData(data, 'constructorCation.name.lastname', '')}</h6>
            </div>
        </div>
    );
  }
}
export default Bank;
