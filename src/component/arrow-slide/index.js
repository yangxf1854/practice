import React, { Component } from 'react'

// 下拉箭头展开收起组件
export default class ArrowSlide extends Component {
  static defaultProps = {
    itemLable: false, // 是否展开收起
    itemName: ''
  }
  constructor(props) {
    super(props);
    const { itemLable } = props;
    this.state = {
      itemLable
    }
  }

  /**
   * 点击展开收起
   * @memberof ArrowSlide
   */
  handleToggleCondition = () => {
    const { itemLable } = this.state;
    this.setState({
      itemLable: !itemLable
    });
  }

  render() {
    const { itemLable } = this.state;
    const { itemsName } = this.props;
    return (
      <div style={{ marginTop: '10px' }}>
        <a className="arrow-alide" onClick={this.handleToggleCondition}>
          {itemsName}<i className={`iconfont ${itemLable ? 'icon-xiangxia2' : 'icon-xiangshang2'}`} />
        </a>
        <div style={{ transition: 'all .4s', maxHeight: itemLable ? '10000px' : '0px', overflow: 'hidden', marginLeft: '30px' }}>{this.props.children}</div>
      </div>
    )
  }
}
