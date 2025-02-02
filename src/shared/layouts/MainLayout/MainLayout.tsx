import { Button, Layout, theme } from 'antd';
import { ReactElement, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import s from './MainLayout.module.scss';
import classNames from 'classnames';

type MainLayoutProps = {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
};

export const MainLayout = (props: MainLayoutProps) => {
    const { content, header, sidebar, className } = props;
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <Layout className={classNames(className, s.layout)}>
            <Sider
                className={s.sidebar}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="demo-logo-vertical" />
                {sidebar}
            </Sider>
            <Layout>
                <Header
                    style={{
                        background: colorBgContainer,
                    }}
                    className={classNames(s.header)}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={toggleSidebar}
                    />
                    {header}
                </Header>
                <Content
                    className={s.content}
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {content}
                </Content>
            </Layout>
        </Layout>
    );
};
