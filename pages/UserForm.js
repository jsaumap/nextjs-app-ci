import LayoutRender from './components/Layout';

import { Form, Input, Button, Card } from 'antd';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};


const UserForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Card title='Registrar Usuario' style={{ width: 650 }}>
        <Form
          {...formItemLayout}
          form={form}
          name='register'
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name='firstName'
            label='Nombres:'
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu Nombre!',
                whitespace: true
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='lastName'
            label='Apellidos:'
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tus Apellidos!',
                whitespace: true
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='rut'
            label='Rut:'
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu Rut!',
                whitespace: true
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: 'email',
                message: 'Tu E-mail no es valido!'
              },
              {
                required: true,
                message: 'Por favor ingresa tu E-mail!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='password'
            label='Contraseña'
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu Contraseña!'
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='confirm'
            label='Confirmar Contraseña'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Por favor confirma tu contraseña!'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Las contraseñas no coinciden!')
                  );
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default UserForm;
