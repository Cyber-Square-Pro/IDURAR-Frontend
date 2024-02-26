import { Descriptions, Dropdown, Table } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { selectListItems } from '@/redux/crud/selectors';
import { EllipsisOutlined } from '@ant-design/icons';
function TableView({ items, config, DropDownRowMenu }) {
  let { dataTableColumns } = config;
  const [selectedItem, setSelectedItem] = useState(null);
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
  const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
    dataTableColumns,
    items
  );
    const handleRowClick = (row) => {
      setSelectedItem(row);
    };
  return (
    <div>
      <Table
        columns={tableColumns}
        rowKey={(item) => item._id}
        dataSource={items}
        pagination={false}
        loading={listIsLoading}
        // onChange={handleDataTableLoad}
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
    </div>
  );
}

export default TableView;
