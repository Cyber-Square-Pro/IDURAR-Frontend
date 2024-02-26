import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Tag, Table } from 'antd';

const ListView = ({ items, DropDownRowMenu }) => {
  const columns = [
    {
      title: <b>Serial No.</b>,
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
      width: '10%',
    },
    {
      title: <b>Product Name</b>,
      dataIndex: 'name',
      key: 'name',
      width: '25%',
    },
    {
      title: <b>Product Owner</b>,
      dataIndex: 'owner',
      key: 'owner',
      width: '20%',
    },
    {
      title: <b>Product Code</b>,
      dataIndex: 'code',
      key: 'code',
      width: '25%',
    },
    {
      title: <b>Status</b>,
      dataIndex: 'active',
      key: 'active',
      width: '15%',
      render: (active) => (
        <Tag color={active === true ? 'green' : 'red'}>
          {active === true ? 'ACTIVE' : 'INACTIVE'}
        </Tag>
      ),
    },
    {
      title: '',
      key: 'action',
      width: '5%',
      render: (text, record) => (
        <Dropdown overlay={DropDownRowMenu({ row: record })} trigger={['click']}>
          <EllipsisOutlined
            style={{
              fontSize: '26px',
              color: 'black',
              cursor: 'pointer',
            }}
          />
        </Dropdown>
      ),
    },
  ];

  return <Table columns={columns} dataSource={items} pagination={false} />;
};

export default ListView;
