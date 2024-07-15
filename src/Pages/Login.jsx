import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Login = () => (
    <>
        <div className="grid lg:grid-cols-2">


            <div className='flex justify-center mt-16 '>
                <img src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-96 rounded-2xl border-2 p-2' />
            </div>
            <div className="flex justify-center mt-24  rounded-xl p-5">
                <Form
                    name="basic"

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <p className='text-start font-bold mb-1'>UserName</p>
                    <Form.Item
                        // label="Username"
                        name="Username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input className='w-96' />
                    </Form.Item>
                    <p className='text-start font-bold mb-1'>Password</p>
                    <Form.Item
                        // label="Password"
                        name="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <div className="flex justify-center">
                        <Form.Item
                            wrapperCol={{
                                span: 16,
                            }}
                        >
                            <Button className='bg-black text-white hover:bg-white hover:text-black' htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </div>

                </Form>
            </div>
        </div>

    </>


);
export default Login;