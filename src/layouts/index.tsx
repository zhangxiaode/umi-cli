import { Layout } from 'antd';
import Sider from './sider/index'
import Header from './header/index'
import Footer from './footer/index'
const { Content } = Layout;

export default (props: any) => (
  <Layout>
    <Sider />
    <Layout>
      <Header />
      <Content>
        <div style={{ padding: 20 }}>{ props.children }</div>
      </Content>
      <Footer />
    </Layout>
  </Layout>
);
