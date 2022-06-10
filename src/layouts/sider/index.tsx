import { useState } from 'react'
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
import classnames from 'classnames';
import styles from './index.less';
import routes from '@config/routes';

export default connect((props: any) => {
  return {
    collapse: props.sider.collapse
  }
})((props: any) => {
  const { collapse } = props; 
  const [openKeys, setOpenKeys] = useState('Goods');
  const [current, setCurrent] = useState('GoodsList');
  const permissions = [10000000, 10000001, 10000002, 10000010, 10000011, 10000012]
  const formatRoute = (menus: Array<any>): MenuItem[] => {
    menus = menus.map((item: any) => {
      if(item.routes && item.routes.length > 0) {
        item.routes = formatRoute(item.routes)
      }
      return item
    })
    return menus.filter((item: any) => item.meta && !item.meta.hidden && permissions.includes(item.meta.code)).map(item => {
      return {
        key: item.meta.key,
        icon: item.meta.icon ? (<img src={require(`@/${item.meta.icon}`)} /> ) : undefined,
        label: item.title,
        children: item.routes && item.routes.length > 0 ? item.routes : undefined,
        type: undefined // item.routes && item.routes.length > 0 ? undefined : 'group'
      }
    })
  } 
  let menus = formatRoute(routes)

  const onOpenChange: MenuProps['onOpenChange'] = (e: string[]) => {
    console.log(111, e)
    setOpenKeys(e[e.length - 1]);
    console.log(222, openKeys)
    console.log(menus)
  };

  const onSelect: MenuProps['onSelect'] = (e: any) => {
    console.log(333, e)
    setCurrent(e.key);
    // console.log(e.item)
    // console.log(menus)
  };

  return (
    <Sider collapsed={ collapse } className={styles.sider}>
      <div className={classnames(styles.logo, 'flex jc-center ai-center')}>
        <img className={styles.icon} src={require('@/assets/logo.png')} />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        onOpenChange={onOpenChange}
        onSelect={onSelect}
        defaultOpenKeys={[openKeys]}
        // openKeys={[openKeys]}
        defaultSelectedKeys={[current]}
        selectedKeys={[current]}
        items={ menus }
      />
    </Sider>
  );
})
