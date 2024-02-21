import React, { useCallback, useEffect, useState } from 'react';
import { Dropdown, Button, PageHeader, Table, Descriptions, Pagination, Menu } from 'antd';
import { EllipsisOutlined, DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { selectListItems } from '@/redux/crud/selectors';
import uniqueId from '@/utils/uinqueId';
import useResponsiveTable from '@/hooks/useResponsiveTable';

export default function DataTable({ config, DropDownRowMenu, AddNewItem }) {
  let { entity, dataTableColumns, DATATABLE_TITLE } = config;

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


  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  const { items } = listResult;

  const dispatch = useDispatch();


  const handleDataTableLoad = useCallback((pagination) => {
    const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
    dispatch(crud.list({ entity, options }));
  }, []);


  const handlePaginationChange = (page, pageSize) => {
    setPagination({ ...pagination, current: page })
  };


  const handlePageSizeChange = ({ key }) => {
    setPagination({ ...pagination, current: 1, pageSize: parseInt(key) });
  };

  useEffect(() => {
    dispatch(crud.list({ entity }));
  }, []);

  
  const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
    dataTableColumns,
    items
  );

  const pageSizeMenu = (
    <Menu onClick={handlePageSizeChange}>
      <Menu.Item key="10">10-Records per page</Menu.Item>
      <Menu.Item key="20">20-Records per page</Menu.Item>
      <Menu.Item key="30">30-Records per page</Menu.Item>
      <Menu.Item key="40">40-Records per page</Menu.Item>
      <Menu.Item key="50">50-Records per page</Menu.Item>

    </Menu>
  );
  return (
    <>
      <div ref={tableHeader}>
        <PageHeader
          onBack={() => window.history.back()}
          title={DATATABLE_TITLE}
          ghost={false}
          extra={[
            <Button onClick={handleDataTableLoad} key={uniqueId()}>
              Refresh
            </Button>,
            <AddNewItem key={uniqueId()} config={config} />,
          ]}
          style={{
            padding: '20px 0px',
          }}
        ></PageHeader>
        <div style={{ display: 'flex',justifyContent: 'right', alignItems: 'center', marginBottom: '20px' ,}}>
          <Dropdown overlay={pageSizeMenu} trigger={['click']}>
            <Button>
              {pagination.pageSize} -Records per page <DownOutlined />
            </Button>
          </Dropdown>
          <Pagination 
          style={{marginLeft:"20px"}}
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={items.length}
            onChange={handlePaginationChange}
            defaultCurrent={2} 
            // simple 
          
          />
        </div>
      </div>
      <Table
        columns={tableColumns}
        rowKey={(item) => item._id}
        dataSource={items}
        pagination={false}
        loading={listIsLoading}
        onChange={handleDataTableLoad}
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
