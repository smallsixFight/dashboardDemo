import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import style from './BaseLayout.less'
import { Link } from '../../node_modules/dva/router';

export default class BaseLayout extends Component {
    render() {
        const { Header, Content, Footer, Sider } = Layout;
        const { SubMenu } = Menu;
        const { children } = this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                
                <Sider>
                    <div className={style.logo}>Colorful 后台管理</div>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="dashboard">
                            <Link to="/">仪表盘</Link>
                        </Menu.Item>
                        <SubMenu title={<span>文章管理</span>} key='文章管理'>
                            <Menu.Item key='listArticle'>
                                <Link to="/articleList">文章列表</Link>
                            </Menu.Item>
                            <Menu.Item key='editArticle'>
                                <Link to="/articleEdit">文章编辑</Link>
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
                        <Menu.Item key='commentManagement'>
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
                </Sider>
                <Layout>
                    <Header className={style.header}>
                        <Menu mode="horizontal" style={{ lineHeight: '64px', float:'right' }}>
                            <Menu.Item key='mySite'>
                                查看网站
                            </Menu.Item>
                            <Menu.Item key='personalSetting'>
                                个人设置
                            </Menu.Item>
                            <Menu.Item key='Logout'>
                                <Link to='/login'>注销</Link>
                            </Menu.Item>
                            
                        </Menu>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        { children }
                    </Content>
                    <Footer className={style.footer}>
                        Colorful Design &copy;2018 Created by Daru
                    </Footer>
                </Layout>
            </Layout>
    )
  }
}
