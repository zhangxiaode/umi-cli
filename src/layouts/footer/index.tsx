import { Layout } from 'antd';
const { Footer } = Layout;
import styles from './index.less';

export default (props: any) => (
  <Footer className={styles.footer}>Copyright © 2021</Footer>
);
