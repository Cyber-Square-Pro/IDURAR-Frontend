import SelectAsync from '@/components/SelectAsync';
import { Form, Input, Select } from 'antd';

export default function AdminForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="surname"
        rules={[
          {
            required: true,
            message: 'Please input your Surname!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your E-mail!',
          },
          {
            pattern: new RegExp(/^[A-Za-z][\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/),
            message: 'Please enter a valid E-mail!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      {!isUpdateForm && (
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>
      )}
      <Form.Item
        label="Role"
        name="role"
        rules={[
          {
            required: true,
            message: 'This Field is required',
          },
        ]}
      >
        <Select>
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="staff">Staff</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}
