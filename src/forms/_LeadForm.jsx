import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Button, Select, Divider, Row, Col } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

export default function LdForm() {
  return (
    <>
    
    <h2>Personal Information</h2>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required:false,
            message: 'Please input First name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: false,
            message: 'Please input Last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[
          {
            required: false,
            message: 'Please input gender!',
          },
        ]}
        
      >
        <Select
          options={[
            
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
          ]}
        ></Select>
      </Form.Item>

      

      <h2>Address Information</h2>
      <Form.Item
        label="Street"
        name="street"
        rules={[
          {
            required:false,
            message: 'Please input street!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="State"
        name="state"
        rules={[
          {
            required: false,
            message: 'Please input state!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: false,
            message: 'Please input country!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="City"
        name="City"
        rules={[
          {
            required: false,
            message: 'Please input city!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Zip code"
        name="zid code"
        rules={[
          {
            required: false,
            message: 'Please input zip code!',
          },
        ]}
      >
        <Input  />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: false,
            message: 'Please input Email!',
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="Contact Number"
        name="contact"
        rules={[
          {
            required: false,
            message: 'Please input Phone Number!',
          },
        ]}
      >
        <Input type="tel" />
      </Form.Item>
      <Form.Item
        label="Parent Contact Number"
        name="parent contact number"
        rules={[
          {
            required: false,
            message: 'Please input Phone Number!',
          },
        ]}
      >
        <Input type="tel" />
      </Form.Item>
      
      <Form.Item
        label="Qualification"
        name="qualification"
        rules={[
          {
            required: false,
            message: 'Please input Qualification!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="College"
        name="college"
        rules={[
          {
            required: false,
            message: 'Please input College!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Pass out year"
        name="Pass out year"
        rules={[
          {
            required: false,
            message: 'Please input pass out year!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Technology opting"
        name="technology opting"
        rules={[
          {
            required: false,
            
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Expected Joining Date"
        name="Excwepted joining date"
        rules={[
          {
            required: false,
           
          },
        ]}
      >
        <Input  type='number'/>
      </Form.Item>

      <Form.Item label="Lead Source" name="lead source">
        <Input placeholder="ex: linkedin, website, ads..." />
      </Form.Item>

      <Form.Item
        label="Lead Status"
        name="status"
        rules={[
          {
            required: false,
            message: 'Please input Lead status!',
          },
        ]}
        initialValue={'new'}
      >
        <Select
          options={[
            { value: 'new', label: 'New' },
            { value: 'reached', label: 'Attempted to Contact' },
            { value: 'interested', label: 'Contacted' },
            { value: 'not interested', label: 'Not Contacted' },
            { value: 'not interested', label: 'Junk Lead' },
            { value: 'not interested', label: 'Lost Lead' },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item
        label="Mode of Training"
        name="mode"
        rules={[
          {
            required: false,
            message: 'Please input mode of training!',
          },
        ]}
        
      >
        <Select
          options={[
            
            { value: 'Online', label: 'Online' },
            { value: 'Offline', label: 'Offline' },
          ]}
        ></Select>
      </Form.Item>

    <h2>Description Information</h2> 
    <Form.Item
        label="Description"
        name="Description"
        rules={[
          {
            required: false,
         
          },
        ]}
      >
        <Input .TextArea rows={3} />
      </Form.Item>

    </>

  );
}
