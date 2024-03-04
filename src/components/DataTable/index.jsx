import React, { useCallback, useEffect, useState } from 'react';
import { Dropdown, Button, PageHeader, Table, Descriptions, Pagination, Menu } from 'antd';
import {
  EllipsisOutlined,
  DownOutlined,
  AppstoreOutlined,
  TableOutlined,
  UnorderedListOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectListItems } from '@/redux/crud/selectors';
import { crud } from '@/redux/crud/actions';
import uniqueId from '@/utils/uinqueId';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import TileView from '../TileView';

const DataTable = ({ config, DropDownRowMenu, AddNewItem }) => {
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


  

  const [sortData, setSortByData] = useState('None');
  const [sortByKey, setSortByKey] = useState('Asc');

  const [viewType, setViewType] = useState('table'); // Default view type
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();

  const handleDataTableLoad = useCallback((pagination) => {
    const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
    dispatch(crud.list({ entity, options }));
  }, []);

  const handlePaginationChange = (page, pageSize) => {
    setPagination({ ...pagination, current: page });
  };

  const handlePageSizeChange = ({ key }) => {
    setPagination({ ...pagination, current: 1, pageSize: parseInt(key) });
  };

  const handleSortByData = ({ key }) => {
    setSortByData(key);
  };

  const handleSortKey = ({ key }) => {
    setSortByKey(key);
  };

  const handleViewTypeChange = ({ key }) => {
    setViewType(key);
  };

  const handleRowClick = (row) => {
    setSelectedItem(row);
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

  const sortByData = (
    <Menu onClick={handleSortByData}>
      <Menu.Item key="Name">Name</Menu.Item>
      <Menu.Item key="Email">Email</Menu.Item>
      <Menu.Item key="Course">Course</Menu.Item>
    </Menu>
  );

  const sortOptions = (
    <Menu onClick={handleSortKey}>
      <Menu.Item key="Asc">Asc</Menu.Item>
      <Menu.Item key="Desc">Desc</Menu.Item>
    </Menu>
  );
 
  const importOptions = (
    <Menu>
      <Menu.Item key="notes">Import Notes</Menu.Item>
      <Menu.Item key="leads">Import Leads</Menu.Item>
    </Menu>
  );
  const importActions = (
    <Menu>
      <Menu.Item key="delete">Mass Delete</Menu.Item>
      <Menu.Item key="update">Mass Update</Menu.Item>
      <Menu.Item key="convert">Mass Convert</Menu.Item>
      <Menu.Item key="tag">Manage Tags</Menu.Item>
      <Menu.Item key="draft">Draft</Menu.Item>
    </Menu>
  );

  const viewTypeMenu = (
    <Menu onClick={handleViewTypeChange}>
      <Menu.Item key="table" icon={<TableOutlined />}>
        Table View
      </Menu.Item>
      <Menu.Item key="tile" icon={<AppstoreOutlined />}>
        Tile View
      </Menu.Item>
      <Menu.Item key="list" icon={<UnorderedListOutlined />}>
        List View
      </Menu.Item>
    </Menu>
  );

  const ListView = ({ items }) => {
    return (
      <div style={{ padding: '10px 0' }}>
        <table
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <thead style={{ backgroundColor: '#FAFAFA', height: '50px' }}>
            <tr>
              <th style={{ padding: '12px' }}>
                <b>Serial No.</b>
              </th>
              <th>
                <b>First Name</b>
              </th>
              <th>
                <b>Last Name</b>
              </th>
              <th>
                <b>Company</b>
              </th>
              <th>
                <b>Email</b>
              </th>
              <th>
                <b>Phone</b>
              </th>
              <th>
                <b>Status</b>
              </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} style={{ border: 'none', borderBottom: '1px solid #e8e8e8' }}>
                <td style={{ padding: '12px' }}>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td style={{ textTransform: 'uppercase' }}>{item.status}</td>
                <td>
                  {' '}
                  <EllipsisOutlined style={{ fontSize: '25px', fontWeight: '700' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <>
      <div ref={tableHeader}>

        <PageHeader
          onBack={() => window.history.back()}
          title={DATATABLE_TITLE}
          ghost={false}
          extra={[
            <div  style={{
              padding: '20px 0px',
              display:'flex',
              justifyContent:'right',
              gap:'20px'
            }}>
            <Button onClick={handleDataTableLoad} key={uniqueId()}>
              Refresh
            </Button>      

            <AddNewItem key={uniqueId()} config={config} />

            <Dropdown key="dropdown" overlay={importOptions} placement="bottomRight">
              <Button style={{ marginLeft: '0px' }} type="primary">
                <DownOutlined />
              </Button>
            </Dropdown>

            <Dropdown key="Action_dropdown" overlay={importActions} placement="bottomRight">
              <Button style={{ marginLeft: '10px' }}>
                Action <DownOutlined />
              </Button>
            </Dropdown>

            <Dropdown overlay={viewTypeMenu} trigger={['click']}>
              <Button>
                {viewType === 'table' ? (
                  <TableOutlined />
                ) : viewType === 'tile' ? (
                  <AppstoreOutlined />
                ) : (
                  <UnorderedListOutlined />
                )}
                <CaretDownOutlined />
              </Button>
            </Dropdown>

              </div>
            
          ]}
          style={{
            padding: '20px 0px',
           
          }}/>        
        
        
        <div
          className="records-dropdown"
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            marginBottom: '20px',
            backgroundColor:'transparent',
            width:'100%',
          }}
        >
          <Dropdown overlay={pageSizeMenu} trigger={['click']} 
          style={{ width: '300px' }}>
            <Button>
              {pagination.pageSize} -Records per page <DownOutlined />
            </Button>
          </Dropdown>
          <Pagination
            style={{ marginLeft: '20px' }}
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={items.length}
            onChange={handlePaginationChange}
            defaultCurrent={2}
          />

        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            gap: '20px',
            height: '30px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          <label style={{ marginTop: '4px' }}> Sort by</label>
          <Dropdown overlay={sortByData} trigger={['click']}>
            <Button>
              {sortData}
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={sortOptions} trigger={['click']}>
            <Button>
              {sortByKey} <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      {viewType === 'list' && <ListView items={items} />}
      {viewType === 'tile' && <TileView items={items} DropDownRowMenu={DropDownRowMenu} />}
      {viewType !== 'list' && viewType !== 'tile' && (
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
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
      )}
    </>
  );
};

export default DataTable;
