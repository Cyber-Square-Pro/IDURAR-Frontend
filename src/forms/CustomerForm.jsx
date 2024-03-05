import React from 'react';
import { Button, Form, Input } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';

export default function CustomerForm({ isUpdateForm = false }) {
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  return (
    <>
      <Form.Item
        label="Company Name"
        name="company"
        rules={[
          {
            required: true,
            message: 'Please input your Company name!',
          },
          {
            validator: validateEmptyString,
            message: 'Please input a valid value!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="managerSurname"
        rules={[
          {
            required: true,
            message: 'Please input your Surname!',
          },
          {
            validator: validateEmptyString,
            message: 'Please input a valid value!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="Name"
        name="managerName"
        rules={[
          {
            required: true,
            message: 'Please input your Manager name!',
          },
          {
            validator: validateEmptyString,
            message: 'Please input a valid value!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
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
        name="email"
        label="E-mail"
        rules={[
          {
            pattern: new RegExp(/^[A-Za-z][\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/),
            message: 'Please enter a valid Email!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
    </>
  );
}
