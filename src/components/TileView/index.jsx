import { EllipsisOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import { Dropdown, Tag } from 'antd';

const TileView = ({ items, DropDownRowMenu }) => {
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
          <div style={{ padding: '15px 15px', lineHeight: '1' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                color: '#2B2E2F',
              }}
            >
              {item.firstName} {item.lastName}
            </h3>
            <p>
              <span style={{ fontWeight: '700', color: '#353D68' }}>Status - </span>
              <span
                style={{
                  textTransform: 'capitalize',
                  fontWeight: '900',
                  color: '#353D68',
                }}
              >
                {item.status}
              </span>
            </p>
            <p>
              <span style={{ fontWeight: '600' }}>Company </span>{' '}
              <span style={{ textTransform: 'capitalize', fontWeight: '700 ' }}>
                {item.company}
              </span>
            </p>
            <p>
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '16px',
                  color: '#D64141',
                }}
              >
                <MailOutlined style={{ color: '#D64141' }} /> - {item.email}
              </span>
            </p>
            <p>
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '16px',
                  color: '#3B468A',
                }}
              >
                <PhoneOutlined style={{ color: '#3B468A' }} /> - {item.phone}
              </span>
            </p>
          </div>
          <Dropdown overlay={DropDownRowMenu({ row: item })} trigger={['click']}>
            <EllipsisOutlined
              style={{
                position: 'relative',
                bottom: '25px',
                left: '20px',
                fontSize: '26px',
                color: 'black',
                cursor: 'pointer',
              }}
            />
          </Dropdown>
        </div>
      ))}
    </div>
  );
};

export default TileView;
