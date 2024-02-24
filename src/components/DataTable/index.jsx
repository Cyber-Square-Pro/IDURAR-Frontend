import React, { useCallback, useEffect, useState } from 'react';
import { Dropdown, Button, PageHeader, Table, Col, Descriptions, Menu, Space } from 'antd';

import { EllipsisOutlined, DownOutlined,UnorderedListOutlined,AppstoreOutlined,TableOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { selectListItems } from '@/redux/crud/selectors';
import uniqueId from '@/utils/uinqueId';
import useResponsiveTable from '@/hooks/useResponsiveTable';
export default function DataTable({ config, DropDownRowMenu, AddNewItem }) {
  let { entity, dataTableColumns, DATATABLE_TITLE } = config;
  // console.log('entity from components->dataTable', entity);
  // console.log('config from components->dataTable', config);
  dataTableColumns = [
    ...dataTableColumns,
    {
      title: '',
      render: (row) => (
        <Dropdown overlay={DropDownRowMenu({ row })} trigger={['click']}>
          <EllipsisOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
        </Dropdown>
      ),
    },
  ];

  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);

  const { pagination, items } = listResult;

  const dispatch = useDispatch();

  const handelDataTableLoad = useCallback((pagination) => {
    const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
    dispatch(crud.list({ entity, options }));
  }, []);

  useEffect(() => {
    dispatch(crud.list({ entity }));
  }, []);

  const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
    dataTableColumns,
    items
  );

  const ViewItems = [
    {
      key: '1',
      label: 'Custom List View',
      Icon:<UnorderedListOutlined />
    },
    {
      key: '2',
      label: 'Tile View',
      Icon:<AppstoreOutlined />

    },
    {
      key: '3',
      label: 'Table Vew',
      Icon:<TableOutlined />

    },
  ];
  

  let key1='list'
  let key2 = 'action'
  const actionItems = [
    {
      key: '1',
      label: 'Manage tags',
    },
    {
      key: '2',
      label: 'Mass delete',
    },
    {
      key: '3',
      label: 'Mass email',
    },
    {
      key: '4',
      label: 'Draft',
    },
  ];

  const [item,setItem] = useState('');
  const menu = (
    <div>
      <Menu  style={{ marginLeft: '-60px' }}>
        {ViewItems.map((ViewItems) => (
          <Menu.Item onClick={(e) => setItem(e.domEvent.target.firstElementChild.childNodes[0].innerHTML)}
           key={ViewItems.key}>
            <span style={{marginRight:'10px'}}>{ViewItems.Icon}</span>
            {ViewItems.label}
            </Menu.Item>
        ))}
      </Menu>
    </div>
  );

   const ActionMenu = (
     <div>
       <Menu style={{ marginLeft: '-60px' }}>
         {actionItems.map((actionItems) => (
           <Menu.Item
             onClick={(e) => setItem(e.domEvent.target.firstElementChild.childNodes[0].innerHTML)}
             key={ViewItems.key}
           >
             {/* <span style={{ marginRight: '10px' }}>{ViewItems.Icon}</span> */}
             {actionItems.label}
           </Menu.Item>
         ))}
       </Menu>
     </div>
   );
  console.log(tableHeader.current)

  return (
    <>
      <div ref={tableHeader}>
        <PageHeader
          onBack={() => window.history.back()}
          title={DATATABLE_TITLE}
          ghost={false}
          extra={[
            <Dropdown overlay={menu} trigger={['click']}>
              <a
                style={{ marginRight: '5px' }}
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>,
            <Button
              style={{ marginRight: '10px' }}
              onClick={handelDataTableLoad}
              key={`${uniqueId()}`}
            >
              Refresh
            </Button>,
            <Dropdown  overlay={ActionMenu} trigger={['click']}>
              <a
                style={{ marginRight: '5px' }}
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  <span>Action</span>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>,
            <AddNewItem key={`${uniqueId()}`} config={config} />,
          ]}
          style={{
            padding: '0px 20px 0px',
          }}
        >
        </PageHeader>
      </div>
      <Table
        columns={tableColumns}
        rowKey={(item) => item._id}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
        expandable={
          expandedRowData.length
            ? {
                expandedRowRender: (record) => (
                  <Descriptions title="" bordered column={1}>
                    {expandedRowData.map((item, index) => {
                      return (
                        <Descriptions.Item key={index} label={item.title}>
                          {item.render?.(record[item.dataIndex])?.children
                            ? item.render?.(record[item.dataIndex])?.children
                            : item.render?.(record[item.dataIndex])
                            ? item.render?.(record[item.dataIndex])
                            : Array.isArray(item.dataIndex)
                            ? record[item.dataIndex[0]]?.[item.dataIndex[1]]
                            : record[item.dataIndex]}
                        </Descriptions.Item>
                      );
                    })}
                  </Descriptions>
                ),
              }
            : null
        }
      />
    </>
  );
}
