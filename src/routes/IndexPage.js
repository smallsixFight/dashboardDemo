import Dashboard from '../components/dashBoard/Dashboard'

import React, { Component } from 'react'
import { Divider } from 'antd';

export default class IndexPage extends Component {
  
  render() {
    document.title = '仪表盘'
    return (
      <div>
        <Divider orientation="left">仪表盘</Divider>
        <Dashboard></Dashboard>
      </div>
    );
  };
}

