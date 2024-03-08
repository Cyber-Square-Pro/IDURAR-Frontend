import dayjs from 'dayjs';
import { Tag } from 'antd';
import React from 'react';

import CrudModule from '@/modules/ProductCrudModule/index';
import LeadForm from '@/forms/_LeadForm';

import configPage from './config/index';

export default function Product() {
  const searchConfig = {
    displayLabels: ['firstname', 'company'],
    searchFields: 'firstname,company',
    outputValue: '_id',
  };
  const entityDisplayLabels = ['number', 'company'];

  const readColumns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Product Code',
      dataIndex: 'code',
    },
    {
      title: 'Product Owner',
      dataIndex: 'owner',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  const dataTableColumns = [
    {
      title: 'Product Owner',
      dataIndex: ['owner'],
    },
    {
      title: 'Product Name',
      dataIndex: ['name'],
    },
    {
      title: 'Product Code',
      dataIndex: ['code'],
    },
    {
      title: 'Status',
      dataIndex: 'active',
      render: (active) => {
        let color = active === true ? 'green' : 'red';
        let tag = active === true ? 'ACTIVE' : 'INACTIVE';
        return <Tag color={color}>{tag}</Tag>;
      },
    },
    {
      title: 'Created At',
      dataIndex: 'created',
      render: (date) => dayjs(date).format('DD/MM/YYYY'),
    },
  ];

  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}
