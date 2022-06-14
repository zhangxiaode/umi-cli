import { connect } from 'dva';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import classnames from 'classnames';
import routes from '@config/routes';
import { history } from 'umi';
import styles from './index.less';
const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

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
      key: item.path,
      icon: item.meta.icon ? (<img src={require(`@/${item.meta.icon}`)} /> ) : undefined,
      label: item.title,
      children: item.routes && item.routes.length > 0 ? item.routes : undefined,
      type: undefined
    }
  })
} 
const menus = formatRoute(routes)
const rootSubmenuKeys = menus.map((item: any) => item.key);

export default connect((props: any) => {
  let openKey: any = []
  menus.map((item: any) => {
    if(item.children && item.children.some((e: any) => e.key == location.pathname)) {
      openKey = [item.key]
    }
  })
  const openKeys = props.sider.openKeys
  return {
    collapse: props.sider.collapse,
    pathname: props.router.location.pathname,
    menus,
    rootSubmenuKeys,
    openKey,
    openKeys: openKeys.length == 0 ? openKey : openKeys
  }
})((props: any) => {
  const { collapse, openKeys, dispatch } = props; 
  const onOpenChange: MenuProps['onOpenChange'] = (keys: any) => {
    const latestOpenKey: string = keys.find((key: string) => openKeys.indexOf(key) === -1);
    let openKey = latestOpenKey ? [latestOpenKey] : []
    if (props.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      openKey = keys
    }
    dispatch({
      type: 'sider/changeOpenKeys',
      payload: {
        openKeys: openKey
      },
    });
  };

  const onSelect: MenuProps['onSelect'] = (e: any) => {
    history.push(e.key);
  };

  return (
    <Sider collapsed={ collapse } className={styles.sider}>
      <div className={classnames(styles.logo, 'flex jc-center ai-center')}>
        <img className={styles.icon} src={require('@/assets/logo.png')} />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        onOpenChange={ onOpenChange }
        openKeys={ openKeys }
        onSelect={ onSelect }
        selectedKeys={ [location.pathname] }
        items={ props.menus }
      />
    </Sider>
  );
})
