import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import './index.less';

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value;
}

function hasPrefixSuffix(props) {
  return !!('prefix' in props || props.suffix || props.allowClear)
}
// 输入框
export default class Input extends Component {
  static defaultProps = {
    type: 'text',
    placeholder:'',
    disabled: false, // 是否禁用
  }
  static propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    allowClear: PropTypes.bool,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  }
  constructor(props) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
    }
  }

  setValue = (value, e, callback) => {
    if (!('value' in this.props)) {
      this.setState({ value }, callback);
      const { onChange } = this.props;
      onChange(e);
    }
  }

  saveInput = (node) => {
    this.input = node;
  }

  handleChange = (e) => {
    this.setValue(e.target.value, e);
  }

  handleReset = (e) => {
    this.setValue('', e, () => {
      this.focus();
    })
  }

  focus = () => {
    this.input.focus();
  }

  blur = () => {
    this.input.blur();
  }

  select = () => {
    this.input.select();
  }

  renderLabeledIcon = (prefixCls, children) => {
    const { props } = this;
    const suffix = this.renderSuffix(prefixCls);
    if (!hasPrefixSuffix(props)) { // 没有前缀后缀和清除，直接返回input
      return children;
    }
  
    const prefix = props.prefix ? (
      <span className="input-prefix">{props.prefix}</span>
    ) : null;
  
    return (
      <span className="input-affix-wrapper">
        {prefix}
        {
          React.cloneElement(children)
        }
        {suffix}
      </span>
    )
  }

  renderClearICon = (prefixCls) => {
    const { allowClear, disabled } = this.props;
    const { value } = this.state;
    if (!allowClear || disabled || value === undefined || value === null || value === '') {
      return null;
    }
    return <span onClick={this.handleReset} className="input-clear">关闭清除</span>;

  }

  renderSuffix = (prefixCls) => {
    const { suffix, allowClear } = this.props;
    if (suffix || allowClear) {
      return (
        <span>
          {this.renderClearICon(prefixCls)}
          {suffix}
        </span>
      )
    }
  }

  renderInput = (prefixCls) => {
    const {
      type,
      placeholder,
      allowClear,
    } = this.props;
    const {
      value
    } = this.state;
    return this.renderLabeledIcon(
      prefixCls,
      <input
        type={type}
        placeholder={placeholder}
        className="this-input"
        value={fixControlledValue(value)}
        onChange={this.handleChange}
        ref={this.saveInput}
        allowClear={allowClear}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderInput()}
      </div>
    )
  }
}
