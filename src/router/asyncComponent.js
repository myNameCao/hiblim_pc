/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-04-02 14:23:48
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-02 14:24:17
 */
import React, { Component } from "react";

export default function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    constructor (props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount () {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render () {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
