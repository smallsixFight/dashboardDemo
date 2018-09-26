import React, { Component } from 'react';
import { Divider } from '../../node_modules/antd';
import ArticleTable from '../components/articleList/ArticleTable';
import ArticleEditor from '../components/articleEdit/ArticleEditor';

export default class ArticleList extends Component {
  render() {
    document.title = '文章管理';
    return (
      <div>
          <Divider orientation="left">文章列表</Divider>
          <ArticleTable></ArticleTable>
          {/* <ArticleEditor></ArticleEditor> */}
      </div>
    )
  }
}
