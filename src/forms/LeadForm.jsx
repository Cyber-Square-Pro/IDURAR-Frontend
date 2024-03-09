import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import { useDispatch } from 'react-redux';


const LeadForm = () => {

    const [countries, setCountries] = useState([]);
     const dispatch=useDispatch();



    useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
   

  return (
 <>



  <h2 style={{ marginBottom: '40px', marginTop:  '30px', marginLeft: '50px'}}>Personal Information</h2>
    <div style={{ marginLeft: '90px' }}>
      <Row gutter={[16, 16]}>
        <Col span={10}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: false,
                message: 'Please input First name!',
              },
            ]}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            
          >
            <Input style={{ width: '100%', marginBottom: '10px' }} />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: false,
                message: 'Please input Last name!',
              },
            ]}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
          >
            <Input style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]}>
    <Col span={10}>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[
          {
            required: false,
            message: 'Please input gender!',
          },
        ]}
        labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
      >
        <Select
          options={[
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
          ]}
          
        />
      </Form.Item>
    </Col>
    <Col span={10}>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: false,
            message: 'Please input Email!',
          },
        ]}
        labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
      >
        <Input type="email" style={{ width: '100%' }} />
      </Form.Item>
    </Col>
  </Row>

 <Row gutter={[16, 16]}>
  <Col span={10}>
    <Form.Item
      label="Contact Number"
      name="contactNumber"
      rules={[
        {
          required: false,
          message: 'Please input Phone Number!',
        },
        {
          pattern: /^[0-9]{10}$/,
          message: 'Please enter a valid 10-digit phone number!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input type="tel" style={{ width: '100%' }} />
    </Form.Item>
  </Col>
  <Col span={10}>
    <Form.Item
      label="Parent Contact Number"
      name="parentContact"
      rules={[
        {
          required: false,
          message: 'Please input Phone Number!',
        },
        {
          pattern: /^[0-9]{10}$/,
          message: 'Please enter a valid 10-digit phone number!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input type="tel" style={{ width: '100%' }} />
    </Form.Item>
  </Col>
</Row>

<Row gutter={[16, 16]}>
  <Col span={10}>
    <Form.Item
      label="Qualification"
      name="qualification"
      rules={[
        {
          required: false,
          message: 'Please input Qualification!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input style={{ width: '100%' }} />
    </Form.Item>
  </Col>
  <Col span={10}>
    <Form.Item
      label="College"
      name="college"
      rules={[
        {
          required: false,
          message: 'Please input College!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input style={{ width: '100%' }} />
    </Form.Item>
  </Col>
</Row>

<Row gutter={[16, 16]}>
  <Col span={10}>
    <Form.Item
      label="Pass out year"
      name="passYear"
      rules={[
        {
          required: false,
          message: 'Please input pass out year!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input style={{ width: '100%' }} />
    </Form.Item>
  </Col>
  <Col span={10}>
    <Form.Item
      label="Technology opting"
      name="techOpted"
      rules={[
        {
          required: false,
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input style={{ width: '100%' }} />
    </Form.Item>
  </Col>
</Row>

<Row gutter={[16, 16]}> 
  <Col span={10}> 
    <Form.Item
      label="Expected Joining Date"
      name="joinDate"
      rules={[
        {
          required: false,
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <DatePicker style={{ width: '100%' }} /> 
    </Form.Item>
  </Col>
  <Col span={10}> 
    <Form.Item
      label="Lead Source"
      name="leadSource"
      rules={[
        {
          required: false,
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input placeholder="ex: linkedin, website, ads..." style={{ width: '100%' }} />
    </Form.Item>
  </Col>
</Row>

<Row gutter={[16, 16]}> 
  <Col span={10}>
    <Form.Item
      label="Lead Status"
      name="leadStatus"
      rules={[
        {
          required: false,
          message: 'Please input Lead status!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Select
        style={{ width: '100%' }}
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
  </Col>
  <Col span={10}> 
    <Form.Item
      label="Mode of Training"
      name="trainingMode"
      rules={[
        {
          required: false,
          message: 'Please input mode of training!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Select
        style={{ width: '100%' }}
        options={[
          { value: 'Online', label: 'Online' },
          { value: 'Offline', label: 'Offline' },
        ]}
      ></Select>
    </Form.Item>
  </Col>
</Row>
</div>
      
        
<h2 style={{ marginBottom: '40px', marginTop:  '40px',  marginLeft: '50px'  }}>Address Information</h2>
  <div style={{ marginLeft: '90px' }}>
<Row gutter={[16, 16]}> 
  <Col span={10}> 
    <Form.Item
      label="Street"
      name="street"
      rules={[
        {
          required: false,
          message: 'Please input street!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input style={{ width: '100%' }} /> 
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
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
      <Input style={{ width: '100%' }} />
    </Form.Item>
   
    <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: false,
            message: 'Please select country!',
            
          },
        ]}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
    > 
    <select style={{ width: '100%',height: '30px', border: '1px solid #d9d9d9', borderRadius: '2px'}}>
      {countries.map(country => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
          ))}
        </select>
    </Form.Item>
  </Col>
  <Col span={10}> 
    <Form.Item
      label="City"
      name="city"
      rules={[
        {
          required: false,
          message: 'Please input city!',
        },
      ]}
      labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
    >
    <Input style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item
      label="Zip code"
      name="zipcode"
      rules={[
        {
          required: false,
          message: 'Please input zip code!',
        },
      ]}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
    >
    <Input style={{ width: '100%' }} />
    </Form.Item>
  </Col>
</Row>
</div>   

  <h2  style={{ marginBottom: '40px',marginTop:  '40px',  marginLeft: '50px'  }}>Description Information</h2>
  <div style={{ marginLeft: '90px' }}>
    <Form.Item
    label="Description"
    name="description"
    rules={[
        {
            required: false,
        },
    ]}
    labelCol={{ span: 4 }} 
    wrapperCol={{ span: 12 }} 
>
    <Input.TextArea rows={2} style={{ width: '100%' }} /> 
    </Form.Item>

    {/* <Form.Item style={{ textAlign: 'center', marginRight: '250px'}}>
        <Button type="primary" htmlType="submit" style={{ width: '200px', fontSize: '16px'  }} >
            Submit
        </Button>
    </Form.Item> */}

    </div>
 </>
  )
}

export default LeadForm
