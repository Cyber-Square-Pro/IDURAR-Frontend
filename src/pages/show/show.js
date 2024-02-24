import React from 'react';
import { Breadcrumb, Layout, Menu, Button, Card, Input, Dropdown, message, Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css';
import { useState } from 'react';
import { Select, Space, Avatar } from 'antd';
const { Header, Content } = Layout;
const { TextArea } = Input;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const tabList = [
  {
    key: 'Mails',
    tab: 'Mails',
  },
  {
    key: 'Drafts',
    tab: 'Drafts',
  },
  {
    key: 'Scheduled',
    tab: 'Scheduled',
  },
];
const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
  tab3: <p>content3</p>,
};

const Show = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');

  const [showTitleField, setShowTitleField] = useState(false);

  const handleInputClick = () => {
    setShowTitleField(true);
  };
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <Layout>
      <Header
        style={{
          background: 'white', // Setting white background color
          display: 'flex',
          alignItems: 'center',
          marginTop: '57px',
          height: '80px',
        }}
      >
        <Space wrap size={16}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Space>
        <h1>Mr. James Merced (Sample)</h1>
        <div style={{ paddingLeft: '300px' }}></div>
        <div style={{ marginLeft: 'auto' }}>
          <Button type="primary">Send Email</Button>
          <span> </span>
          <Button>Convert</Button>
          <span> </span>
          <Button>Edit</Button>
          <span> </span>
        </div>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>{' '}
      <br />
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          <Card
            style={{ marginTop: 16, width: '100%' }}
            className="shadow p-2 mb-5 bg-white rounded"
          >
            <table border={0} cellPadding={5} cellSpacing={10}>
              <tr>
                <td>Lead Owner</td>
                <td>
                  <input className="inputField" type="text" />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input className="inputField" type="text" />
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input className="inputField" type="text" />
                </td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>
                  <input className="inputField" type="text" />
                </td>
              </tr>
              <tr>
                <td>Lead Status</td>
                <td>
                  <input className="inputField" type="text" />
                </td>
              </tr>
            </table>
          </Card>
          <br />

          <Collapse
            bordered={false}
            className="shadow p-2 mb-5 bg-white rounded"
            style={{ marginTop: 16, width: '100%', background: 'white' }}
          >
            <Collapse.Panel header="Show Details">
              <table border={0} cellPadding={5} cellSpacing={10}>
                <tr>
                  <th className="table-header">Lead Information</th>
                </tr>
                <tr>
                  <td>Lead Owner</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                  <td>Company</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>

                <tr>
                  <td>Title</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                  <td>Lead Name</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>

                <tr>
                  <td>Phone</td>
                  <td>
                    <input className="inputField-2" type="number" />
                  </td>
                  <td>Email</td>
                  <td>
                    <input className="inputField-2" type="email" />
                  </td>
                </tr>

                <tr>
                  <td>Mobile</td>
                  <td>
                    <input className="inputField-2" type="number" />
                  </td>
                  <td>Fax</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>

                <tr>
                  <td>Lead Source</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                  <td>Website</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>

                <tr>
                  <td>Industry</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                  <td>Lead Status</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Annual Revenue</td>
                  <td>
                    <input className="inputField-2" type="number" />
                  </td>
                  <td>No. of Employees</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Email Opt Out</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                  <td>Rating</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>

                <tr>
                  <td>Modified By</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                  <td>Created By</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>

                <tr>
                  <td>Skype ID</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                  <td>Secondary Email</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>

                <tr>
                  <td>Twitter</td>
                  <td>
                    <input className="inputField-2" type="text" />
                  </td>
                </tr>
              </table>
              <br />
            </Collapse.Panel>
          </Collapse>

          <Card
            style={{
              marginTop: 16,
            }}
            type="white"
            title="Notes"
            extra={
              <Space wrap>
                <Select
                  defaultValue="Recent First"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'Recent First',
                      label: 'Recent First',
                    },
                    {
                      value: 'Recent Last',
                      label: 'Recent Last',
                    },
                  ]}
                />
              </Space>
            }
          >
            <div className="notes bg-white rounded">
              <div className="notediv">
                <TextArea placeholder="Enter your text here" rows={5}></TextArea>

                {showTitleField && (
                  <Input
                    style={{
                      width: '50%',
                      marginTop: '5px',
                      position: 'absolute',
                      top: '4px',
                      left: '5px',
                    }}
                    type="text"
                    placeholder="Title"
                  />
                )}

                <Input
                  className="noteinput"
                  type="text"
                  placeholder="Add a title"
                  onClick={handleInputClick}
                />
                <div className="notebtn">
                  <Button type="primary">Save</Button>
                  <Button type="default" style={{ marginLeft: '5px' }}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <br />

          <Card
            className="shadow p-2 mb-5 bg-white rounded"
            type="white"
            title="Attachment"
            extra={
              <Space wrap>
                <Select
                  defaultValue="Attach"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'Upload File',
                      label: 'Upload File',
                    },
                    {
                      value: 'Documents',
                      label: 'Documents',
                    },
                    {
                      value: 'Link (URL)',
                      label: 'Link (URL)',
                    },
                    {
                      value: 'disabled',
                      label: 'Disabled',
                      disabled: true,
                    },
                  ]}
                />
              </Space>
            }
          >
            NO ATTACHMENT
          </Card>

          <br />

          <Card
            style={{
              width: '100%',
            }}
            className="shadow p-2 mb-5 bg-white rounded"
            title="Emails"
            extra={
              <Button type="wheat" style={{ color: 'light blue' }}>
                Compose Email
              </Button>
            }
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={onTab1Change}
          >
            {contentList[activeTabKey1]}
          </Card>
          <br />
        </div>
      </Content>
    </Layout>
  );
};

export default Show;
