import React from 'react';
import { Form, Input, Button, Radio, Select, Switch } from 'antd';
import { DatePicker, TimePicker, Calendar } from '@/components/CustomAntd';
import { validatePhoneNumber } from '@/utils/helpers';

export default function EmployeeForm() {
  return (
    <>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Surname"
        rules={[
          {
            required: true,
            message: 'Please input your surname!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="Birthday"
        rules={[
          {
            required: true,
            message: 'Please input your birthday!',
          },
        ]}
      >
        <DatePicker format={'DD/MM/YYYY'} />
      </Form.Item>
      <Form.Item
        name="birthplace"
        label="Birthplace"
        rules={[
          {
            required: true,
            message: 'Please input your birthplace!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please input your gender',
          },
        ]}
      >
        <Select>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            pattern: new RegExp(
              /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
            ),
            message: 'Please enter a valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          {
            pattern: new RegExp(/^(((\+){1}91){1})? ?-?[98765]{1}[0-9]{9}$/),
            message: 'Please enter a valid phone number!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="department"
        label="Department"
        rules={[
          {
            required: true,
            message: 'Please input your department!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="position"
        label="Position"
        rules={[
          {
            required: true,
            message: 'Please input your position!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="state"
        label="State"
        rules={[
          {
            required: true,
            message: 'Please input your state!',
          },
          { whitespace: true, message: 'This field cannot be empty!' },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
    </>
  );
}
