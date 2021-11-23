import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LineChartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const LayoutRender = ({ children }) => {
  const [state, setState] = useState({
    collapsed: false,
    menu: {
      item: '',
      subItem: ''
    }
  });
  console.log(state)
  const { collapsed, menu } = state;

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ ...state, collapsed });
  };

  const handlerMenu = (item, subItem) => {
    setState({
      ...state,
      menu: {
        item,
        subItem
      }
    });
  };
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' mode='inline'>
            <SubMenu key='sub1' icon={<UserOutlined />} title='Usuarios'>
              <Menu.Item
                key='1'
                onClick={() => handlerMenu('Usuarios', 'Login')}
              >
                <Link href='/Login'>Login</Link>
              </Menu.Item>
              <Menu.Item
                key='2'
                onClick={() => handlerMenu('Usuarios', 'Crear')}
              >
                <Link href='/UserForm'>Crear</Link>
              </Menu.Item>
              <Menu.Item
                key='3'
                onClick={() => handlerMenu('Usuarios', 'Listar')}
              >
                <Link href='/UserTable'>Listar</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<LineChartOutlined />} title='Graficos'>
              <Menu.Item
                key='4'
                onClick={() => handlerMenu('Graficos', 'Tortas')}
              >
                <Link href='/charts/PiesCharts'>Tortas</Link>
              </Menu.Item>
              <Menu.Item
                key='5'
                onClick={() => handlerMenu('Graficos', 'Barras')}
              >
                <Link href='/charts/ColumnsCharts'>Barras</Link>
              </Menu.Item>
              <Menu.Item
                key='6'
                onClick={() => handlerMenu('Graficos', 'Lineas')}
              >
                <Link href='/charts/LinesCharts'>Lineas</Link>
              </Menu.Item>
              <Menu.Item
                key='7'
                onClick={() => handlerMenu('Graficos', 'Puntos')}
              >
                <Link href='/charts/ScatterCharts'>Puntos</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{menu.item}</Breadcrumb.Item>
              <Breadcrumb.Item>{menu.subItem}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: '80vh' }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default LayoutRender;
