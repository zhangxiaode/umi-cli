// import { useState } from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
const { Header } = Layout;
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.less';

export default connect((props: any) => {
  return {
    collapse: props.sider.collapse
  }
})((props: any) => {
  const { collapse } = props; 
  const handleCollapse = () => {
    const { dispatch } = props; 
    dispatch({
      type: 'sider/changeCollapse',
      payload: {},
    });
  }
  return (
    <Header className={classnames(styles.header, 'flex jc-between ai-center')}>
      {
        collapse ? <MenuUnfoldOutlined onClick={ handleCollapse } /> : <MenuFoldOutlined onClick={ handleCollapse } />
      }
      <div className={classnames(styles.userInfo, 'flex jc-between ai-center')}>
        <img className={styles.photo} src={require('@/assets/logo.png')} />
        <div className={styles.nickname}>沙华</div>
      </div>
    </Header>
  );
})
