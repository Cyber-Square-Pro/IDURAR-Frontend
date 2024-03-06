import React from 'react';
import { Table, Tag, Dropdown } from 'antd';
import { CodeTwoTone, EllipsisOutlined } from '@ant-design/icons';

const TileView = ({ items, DropDownRowMenu }) => {
  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      render: (_, item) => (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <img src="#" alt="Product IMG" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                color: '#2B2E2F',
              }}
            >
              {item.name}
            </h3>
          </div>
          <div style={{ marginBottom: '10px', fontSize: '20px' }}>
            Status :{' '}
            <Tag color={item.active ? 'green' : 'red'}>{item.active ? 'ACTIVE' : 'INACTIVE'}</Tag>
          </div>
          <div style={{ marginBottom: '10px', fontSize: '18px' }}>
            {' '}
            Owner - <span style={{ fontWeight: 'bold' }}>{item.owner}</span>
          </div>
          <div style={{ marginBottom: '10px', fontSize: '18px' }}>
            Code <span style={{ fontWeight: 'bold' }}>- {item.code}</span>
          </div>
          <Dropdown overlay={DropDownRowMenu({ row: item })} trigger={['click']}>
            <EllipsisOutlined
              style={{
                position: 'relative',
                bottom: '5px',
                left: '20px',
                fontSize: '26px',
                color: '#1890ff',
                cursor: 'pointer',
              }}
            />
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <div className="container" style={{ padding: '25px', display: 'flex', flexWrap: 'wrap' }}>
      {items.map((item, index) => (
        <div
          key={item._id}
          className="card"
          style={{
            boxShadow: '0 4px 8px rgba(136, 146, 203, 0.15)',
            width: 'calc(33% - 20px)',
            margin: '10px',
            fontSize: '17px',
            color: '#515152',
            border: '1px solid rgba(136 , 146, 203, 0.15)',
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-in-out',
            boxSizing: 'border-box',
          }}
        >
          <Table
            columns={columns}
            dataSource={[item]}
            pagination={false}
            rowKey={(record) => record._id}
            style={{ marginBottom: '0px' }}
            bordered
            // title={() => item.name} // Set the title as the product name
          />
        </div>
      ))}
    </div>
  );
};

export default TileView;
