import React, { useState } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Link, Switch, Route, Redirect } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

/**
* @author
* @function DefaultLayout
**/

export const DefaultLayout = ({ routers }) => {
    let [collapsed, setCollapse] = useState(false);

    const onCollapse = collapsed => {
        setCollapse(collapsed)
    };

    // const getMenuItems = () => {
    //     let menus = []
    //     routers.forEach(menu => {
    //         let menuItem = (
    //             <Menu.Item key={menu.path} icon={menu.icon}>
    //                 <Link to={menu.path}>{menu.title}</Link>
    //             </Menu.Item>
    //         )
    //         menus.push(menuItem)
    //     });
    //     return menus
    // }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {/* {getMenuItems()} */}
                    {
                        routers.map((menu) => {
                            return menu.children && menu.children.length != 0 ? (
                                <SubMenu key={menu.path} icon={<UserOutlined />} title="Students">
                                    {menu.children.map((subMenu) => {
                                        return !subMenu.hidden && <Menu.Item key={subMenu.path}><Link to={subMenu.path}>{subMenu.title}</Link></Menu.Item>
                                    })}
                                </SubMenu>
                            ) : (
                                !menu.hidden && <Menu.Item key={menu.path} icon={menu.icon}>
                                    <Link to={menu.path}>{menu.title}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                    {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Students">
                        <Menu.Item key="3"><Link to="/create-student">New Student</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/students">List Student</Link></Menu.Item>
                    </SubMenu> */}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    {/* { main content } */}
                    <Switch>
                        {
                            routers.map(router => {
                                return router.children && router.children.length != 0 ? (
                                    // submenu
                                    router.children.map(subRouter => {
                                        return <Route exact={router.exact} path={subRouter.path}>
                                            {subRouter.component}
                                        </Route>
                                    })
                                ) : (
                                    <Route exact={router.exact} path={router.path}>
                                        {router.component}
                                    </Route>
                                )
                            })
                        }
                        <Route path="/">
                            <Redirect to="/page404"/>
                        </Route>
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}
