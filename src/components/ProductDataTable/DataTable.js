import React, { useCallback, useEffect, useState } from 'react';
import { Dropdown, Button, PageHeader, Table, Descriptions, Pagination, Menu, Tag } from 'antd';
import { items, list } from '@/Testing/ProductList';
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
import TileView from '../ProductDataTable/Views/TileView/index';
import ListView from './Views/ListView';
import TableView from './Views/TableView';

const DataTable = ({ config, DropDownRowMenu, AddNewItem }) => {
  let { entity, ENTITY_NAME, dataTableColumns, DATATABLE_TITLE } = config;

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

  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });
  const [allItems, setAllItems] = useState(list);
  const [items, setItems] = useState(list);

  const [sortData, setSortByData] = useState('None');
  const [sortByKey, setSortByKey] = useState('Asc');

  const [viewType, setViewType] = useState('table'); // Default view type

  const dispatch = useDispatch();

  const filterItems = (list, prop, order) => {
    let newList = [...list];
    if (order === 'Asc') {
      newList.sort((a, b) => {
        if (a[prop] < b[prop]) {
          return -1;
        }
        if (a[prop] > b[prop]) {
          return 1;
        }
        return 0;
      });
    } else if (order === 'Desc') {
      newList.sort((a, b) => {
        if (a[prop] < b[prop]) {
          return 1;
        }
        if (a[prop] > b[prop]) {
          return -1;
        }
        return 0;
      });
    }
    return newList;
  };

  const handleDataTableLoad = useCallback((pagination) => {
    const options = {
      page: pagination.current || 1,
      items: pagination.pageSize || 10,
    };
  }, []);

  const limitingItems = (page, pageSize) => {
    const lastPostIndex = page * pagination.pageSize;
    const firstPostIndex = lastPostIndex - pagination.pageSize;
    setItems(allItems.slice(firstPostIndex, lastPostIndex));
  };
  const handlePaginationChange = (page, pageSize) => {
    setPagination({ ...pagination, current: page });
    limitingItems(page);
  };
  useEffect(() => {
    limitingItems(pagination.current);
  }, []);

  const handlePageSizeChange = ({ key }) => {
    setPagination((prevPagination) => {
      const newPageSize = parseInt(key);
      const newPagination = { ...prevPagination, pageSize: newPageSize };
      const lastPostIndex = newPagination.current * newPageSize;
      const firstPostIndex = lastPostIndex - newPageSize;
      setItems(allItems.slice(firstPostIndex, lastPostIndex));
      return newPagination;
    });
  };
  const handleSortByData = ({ key }) => {
    setSortByData(key);
    let property = key.toLowerCase();
    setItems(filterItems(allItems, property, sortByKey));
  };

  const handleSortKey = ({ key }) => {
    setSortByKey(key);
    let property = sortData.toLowerCase();
    setItems(filterItems(allItems, property, key));
  };

  const handleViewTypeChange = ({ key }) => {
    setViewType(key);
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
      <Menu.Item key="5">5-Records per page</Menu.Item>
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
      <Menu.Item key="Owner">Owner</Menu.Item>
      <Menu.Item key="Code">Code</Menu.Item>
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
      <Menu.Item key="leads">Import Products</Menu.Item>
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

  return (
    <>
      <div ref={tableHeader}>
        <PageHeader
          onBack={() => window.history.back()}
          title={DATATABLE_TITLE}
          ghost={false}
          extra={[
            <div
              style={{
                padding: '20px 0px',
                display: 'flex',
                justifyContent: 'right',
                gap: '20px',
              }}
            >
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
            </div>,
          ]}
          style={{
            padding: '20px 0px',
          }}
        />

        <div
          className="records-dropdown"
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            marginBottom: '20px',
            backgroundColor: 'transparent',
            width: '100%',
          }}
        >
          <Dropdown overlay={pageSizeMenu} trigger={['click']} style={{ width: '300px' }}>
            <Button>
              {pagination.pageSize} -Records per page <DownOutlined />
            </Button>
          </Dropdown>
          <Pagination
            style={{ marginLeft: '20px' }}
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={allItems.length}
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
      {viewType === 'list' && <ListView items={items} DropDownRowMenu={DropDownRowMenu} />}
      {viewType === 'tile' && <TileView items={items} DropDownRowMenu={DropDownRowMenu} />}
      {viewType !== 'list' && viewType !== 'tile' && (
        <TableView config={config} items={items} DropDownRowMenu={DropDownRowMenu} />
      )}
    </>
  );
};

export default DataTable;
