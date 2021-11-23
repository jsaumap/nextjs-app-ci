import { Table, Button } from 'antd';
import LayoutRender from './components/Layout';

export const UserTable = () => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Rut',
      dataIndex: 'rut',
      key: 'rut'
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Acciones',
      key: 'action',
      dataIndex: 'action',
      render: (user) => (
        <>
          <Button onClick={() => handlerAction(user, 'edit')} type='primary'>
            Editar
          </Button>
          {'       '}
          <Button
            onClick={() => handlerAction(user, 'delete')}
            type='primary'
            danger
          >
            Eliminar
          </Button>
        </>
      )
    }
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      rut: '33333333-3',
      email: 'example1@gmail.com'
    },
    {
      key: '2',
      name: 'Jim Green',
      rut: '22222222-2',
      email: 'example2@gmail.com'
    },
    {
      key: '3',
      name: 'Jim Brown',
      rut: '11111111-1',
      email: 'example3@gmail.com'
    }
  ];
  const handlerAction = (user, action) => {
    if (action === 'edit') {
      console.log('editando user:', user);
    } else if (action === 'delete') {
      console.log('eliminando user:', user);
    }
  };
  return (
    <>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default UserTable;
