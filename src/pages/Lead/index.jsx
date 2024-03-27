import dayjs from 'dayjs';
import { Tag } from 'antd';
import React from 'react';
import { crud } from '@/redux/crud/actions';

import CrudModule from '@/modules/CrudModule';
import LeadForm from '@/forms/LeadForm';

import configPage from './config';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

export default function Lead() {
  const searchConfig = {
    displayLabels: ['firstname', 'company'],
    searchFields: 'firstname,company',
    outputValue: '_id',
  };
  const dispatch = useDispatch();
  const entityDisplayLabels = ['number', 'company'];
  const history = useHistory();
  const readColumns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
    },

    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      title: 'Qualification',
      dataIndex: 'qualification',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'contactNumber',
    },
    {
      title: 'Status',
      dataIndex: 'leadStatus',
    },
  ];

  const dataTableColumns = [
    {
      title: 'First Name',
      dataIndex: ['firstName'],
      render: (text, item) => {
        return (
          <a
            onClick={() => {
              console.log(item);
              dispatch(crud.currentItem({ data: item }));
              history.push('/show');
            }}
          >
            {text}
          </a>
        );
      },
    },

    {
      title: 'Last Name',
      dataIndex: ['lastName'],
    },
    {
      title: 'Qualification',
      dataIndex: ['qualification'],
    },
    {
      title: 'Email',
      dataIndex: ['email'],
    },
    {
      title: 'Phone',
      dataIndex: ['phone'],
    },
    {
      title: 'Status',
      dataIndex: 'leadStatus',
      render: (status) => {
        let color =
          status === 'new'
            ? 'cyan'
            : status === 'reached'
            ? 'blue'
            : status === 'interested'
            ? 'green'
            : status === 'not interested'
            ? 'orange'
            : 'red';
        return <Tag color={color}>{status && status.toUpperCase()}</Tag>;
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
    <>
      <CrudModule
        createForm={<LeadForm />}
        updateForm={<LeadForm isUpdateForm={true} />}
        config={config}
      />
    </>
  );
}
