import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

export default (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed}>
      <img className={classnames(styles.logo, 'flex')} src={require('@/assets/logo.png')} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  );
}
