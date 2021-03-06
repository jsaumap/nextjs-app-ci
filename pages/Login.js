import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link'


const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const { push } = useRouter();

  return (
    <>
      {' '}
      <Card title='User Login' style={{ width: 350 }}>
        <Form
          className='login-form'
          initialValues={{ remember: false }}
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className='login-form-forgot' href=''>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>

              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                <Link href='/UserForm'>
                Log in
                </Link>
              </Button>
            Or <a href=''>register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Login;
