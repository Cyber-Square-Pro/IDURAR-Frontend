import React, { useCallback, useEffect, useState } from 'react';
import {
  Dropdown,
  Button,
  PageHeader,
  Table,
  Descriptions,
  Pagination,
  Menu,
  Input,
  Space,
} from 'antd';
import {
  DownOutlined,
  AppstoreOutlined,
  TableOutlined,
  UnorderedListOutlined,
  CaretDownOutlined,
  SearchOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectListItems } from '@/redux/crud/selectors';
import { crud } from '@/redux/crud/actions';
import uniqueId from '@/utils/uinqueId';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import TileView from '../TileView';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const DataTable = ({ config, DropDownRowMenu, AddNewItem }) => {
  let { entity, dataTableColumns, DATATABLE_TITLE } = config;
  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);
  const { items, pagination } = listResult;
  const dispatch = useDispatch();
  const history = useHistory();
  //data for Table
  const [dataSource, setDataSource] = useState([]);
  // Pagination states starts here
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState();
  // Pagination states ends here

  //list view
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  //sorting in tileview
  const [searchText, setSearchText] = useState('');
  const [selectedKey, setSelectedKey] = useState(null);
  const [sortData, setSortByData] = useState({ key: 'none', text: 'None' });
  const [sortByKey, setSortByKey] = useState('None');
  //table views
  const [viewType, setViewType] = useState('table'); // Default view type
  const [selectedItem, setSelectedItem] = useState(null);

  //fetching table data
  useEffect(() => {
    if (listResult && listResult.items) {
      setDataSource(listResult.items);
    }
  }, [listResult]);

  const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
    dataTableColumns,
    items
  );
  useEffect(() => {
    dispatch(crud.list({ entity }));
  }, []);

  //handling Pagination functionalities

  const handleDataTableLoad = useCallback(
    (pagination) => {
      const { current: page, pageSize } = pagination;
      const options = { page: page || 1, items: pageSize || 10 };
      dispatch(crud.list({ entity, options }));
    },
    [dispatch, entity]
  );

  const handlePaginationChange = useCallback(
    (page, pageSize) => {
      setPage(page);
      setPageSize(pageSize);
      dispatch(crud.list({ entity, options: { page, items: pageSize } }));
    },
    [dispatch, entity]
  );
  useEffect(() => {
    console.log(dataSource);
  }, [dataSource]);

  //handling sorting functionalities in tilesview

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSortByData = () => {
    console.log('sort', sortData.text, sortByKey);
    if (sortData.text !== 'None' && sortByKey !== 'None') {
      const sorted = [...dataSource].sort((a, b) => {
        if (sortByKey === 'Asc') {
          return b[sortData.key].localeCompare(a[sortData.key]);
        } else if (sortByKey === 'Desc') {
          return a[sortData.key].localeCompare(b[sortData.key]);
        }
      });
      setDataSource(sorted ? sorted : []);
    } else {
      return setDataSource(listResult.items);
    }
  };
  const filteredItems = [
    { key: 'none', text: 'None' },
    { key: 'firstName', text: 'First Name' },
    { key: 'lastName', text: 'Last Name' },
    { key: 'company', text: 'Company' },
    { key: 'email', text: 'Email' },
  ].filter((item) => item.text.toLowerCase().includes(searchText.toLowerCase()));

  //Menu for sort

  const sortByData = (
    <Menu onClick={handleSortByData}>
      <Menu.Item key="search" disabled>
        <Space>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search menu"
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </Space>
      </Menu.Item>
      {filteredItems.map((item) => (
        <Menu.Item
          key={item.key}
          icon={selectedKey === item.key ? <CheckOutlined /> : null}
          onClick={() => setSortByData({ key: item.key, text: item.text })}
        >
          {item.text}
        </Menu.Item>
      ))}
    </Menu>
  );
  const sortOptions = (
    <Menu onClick={handleSortByData}>
      <Menu.Item key="None" onClick={(e) => setSortByKey('None')}>
        None
      </Menu.Item>
      <Menu.Item key="Asc" onClick={(e) => setSortByKey('Asc')}>
        Asc
      </Menu.Item>
      <Menu.Item key="Desc" onClick={(e) => setSortByKey('Desc')}>
        {' '}
        Desc
      </Menu.Item>
    </Menu>
  );

  // handling different views

  const handleViewTypeChange = ({ key }) => {
    setViewType(key);
  };

  const handleRowClick = (row) => {
    setSelectedItem(row);
  };

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
    const handleRowHover = (index) => {
      setHoveredRowIndex(index);
    };

    const columns = [
      {
        title: 'Serial No',
        render: (text, record, index) => <span>{index + 1}</span>,
      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
        sorter: (a, b) => a.firstName.localeCompare(b.firstName),
        render: (text, item, index) => (
          <a
            onClick={() => {
              console.log(item);
              dispatch(crud.currentItem({ data: item }));
              history.push('/show');
            }}
          >
            {text}
          </a>
        ),
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      },
      {
        title: 'Company',
        dataIndex: 'company',
        sorter: (a, b) => a.company.localeCompare(b.company),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
      },
      {
        title: 'Phone',
        dataIndex: ['phone'],
        sorter: (a, b) => a.phone.localeCompare(b.phone),
        render: (phone) => {
          return <span>{phone}</span>;
        },
      },
      {
        title: 'Status',
        dataIndex: 'status',
        filters: [
          { text: 'New', value: 'new' },
          { text: 'Reached', value: 'reached' },
          { text: 'Interested', value: 'interested' },
        ],
        onFilter: (value, record) => record.status === value,
      },
      {
        title: '',
        render: (row, index) => (
          <div
            onMouseEnter={() => handleRowHover(index)}
            onMouseLeave={() => setHoveredRowIndex(null)}
            style={{ backgroundColor: hoveredRowIndex === index ? '#dedcdc' : 'transparent' }}
          >
            {/* <Dropdown overlay={DropDownRowMenu({ row })} trigger={['click']}>
              <EllipsisOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
            </Dropdown> */}
          </div>
        ),
      },
    ];
    return <Table dataSource={items} columns={columns} pagination={false} />;
  };

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
          <Pagination
            showSizeChanger
            current={page}
            pageSize={pagination.pageSize}
            onShowSizeChange={handlePaginationChange}
            onChange={handlePaginationChange}
            defaultCurrent={page}
            defaultPageSize={pageSize}
            total={pagination.total}
          />
        </div>
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
            {sortData.text}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={sortOptions} trigger={['click']}>
          <Button>
            {sortByKey}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      {viewType === 'list' && <ListView items={dataSource} />}
      {viewType === 'tile' && (
        <>
          <TileView items={dataSource} DropDownRowMenu={DropDownRowMenu} />
        </>
      )}
      {viewType !== 'list' && viewType !== 'tile' && (
        <Table
          columns={tableColumns}
          rowKey={(item) => item._id}
          dataSource={dataSource}
          loading={listIsLoading}
          total={500}
          pagination={false}
          onChange={handlePaginationChange}
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
