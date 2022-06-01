import { useState } from 'react';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

export default connect((props: any) => {
  return {
    collapse: props.sider.collapse
  }
})((props: any) => {
  const { collapse } = props; 
  return (
    <Sider collapsed={ collapse } className={styles.sider}>
      <div className={classnames(styles.logo, 'flex jc-center ai-center')}>
        <img className={styles.icon} src={require('@/assets/logo.png')} />
      </div>
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
})
