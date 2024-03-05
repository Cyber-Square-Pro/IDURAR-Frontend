import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Button, Select, Divider, Row, Col } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

export default function LeadForm() {
  return (
    <>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please Input Your First Name!',
          },
          { whitespace: true,
            message: 'First Name cannot be empty!',
          },
        ]}
      >
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please Input Your Last Name!',
          },
          { whitespace: true,
            message: 'Last Name cannot be empty!', 
          },
        ]}
      >
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please Input Your Email!',
          },
          { pattern: new RegExp(/^[A-Za-z][\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/) ,
            message: 'Please enter a valid Email!' ,   
          },
        ]}
      >
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please Input Your Phone Number!',
          },
          { 
            pattern: new RegExp(/^(((\+){1}91){1})? ?-?[98765]{1}[0-9]{9}$/),
            message: 'Please enter a valid phone number!', 
          },
        ]}
      >
        <Input type="tel" autoComplete='off' />
      </Form.Item>

      <Form.Item
        label="Company"
        name="company"
        rules={[
          {
            required: true,
            message: 'Please Input Your Lead Company!',
          },
          { whitespace: true,
            message: 'Lead Company cannot be empty!', 
          },
        ]}
      >
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item
        label="Job Title"
        name="jobTitle"
        rules={[
          {
            required: true,
            message: 'Please Input Your Job Title!',
          },
          { whitespace: true,
            message: 'Job Title cannot be empty!', 
          },
        ]}
      >
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item label="Address" name="address">
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item label="Country" name="country">
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[
          {
            required: false,
            message: 'Please Input Your Lead status!',
          },
        ]}
        initialValue={'new'}
      >
        <Select
          options={[
            { value: 'new', label: 'New' },
            { value: 'reached', label: 'Reached' },
            { value: 'interested', label: 'Interest' },
            { value: 'not interested', label: 'Not Interest' },
          ]}
        ></Select>
      </Form.Item>

      <Form.Item label="Note" name="note">
        <Input autoComplete='off' />
      </Form.Item>

      <Form.Item label="Source" name="source">
        <Input placeholder="ex: linkedin, website, ads..." autoComplete='off' />
      </Form.Item>
    </>
  );
}
