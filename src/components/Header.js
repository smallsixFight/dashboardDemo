import React, { Component } from 'react';
import { Menu } from 'antd';
import SubMenu from '../../node_modules/antd/lib/menu/SubMenu';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Menu
            mode="horizontal"
        >
            <Menu.Item key='Logout' style={{float:'right'}}>
                注销
            </Menu.Item>
            <Menu.Item key='personalSetting' style={{float:'right'}}>
                个人设置
            </Menu.Item>
            <Menu.Item key='mySite' style={{float:'right'}}>
                查看网站
            </Menu.Item>
        </Menu>
        <Menu
            mode="inline"
            style={{ width: 160 }}>
                <Menu.Item key="dashboard">
                    仪表盘
                </Menu.Item>
                <SubMenu title={<span>文章管理</span>} key='文章管理'>
                    <Menu.Item key='listArticle'>
                        文章列表
                    </Menu.Item>
                    <Menu.Item key='editArticle'>
                        文章编辑
                    </Menu.Item>
                </SubMenu>
                <SubMenu title={<span>页面管理</span>} key='页面管理'>
                    <Menu.Item>
                        页面列表
                    </Menu.Item>
                    <Menu.Item>
                        页面编辑
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key='评论管理'>
                    评论管理
                </Menu.Item>
                <Menu.Item key='category'>
                    分类/标签
                </Menu.Item>
                <Menu.Item key='fileManagement'>
                    文件管理
                </Menu.Item>
                <Menu.Item key='linkManagement'>
                    友链管理
                </Menu.Item>
                <Menu.Item key='systemSetting'>
                    系统设置
                </Menu.Item>
        </Menu>
      </div>
    )
  }
}
