import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, Button, Card, Input, Dropdown, message, Collapse } from 'antd';
import { Select, Space, Avatar, Tabs, Timeline } from 'antd';
import { UserOutlined, MailOutlined, ArrowLeftOutlined, EllipsisOutlined } from '@ant-design/icons';
import './style.css';
import Docs from '@/style/images/google-docs.png';
import File from '@/style/images/file.png';
import Link from '@/style/images/link.png';
import { useSelector } from 'react-redux';
import { selectCurrentItem } from '@/redux/crud/selectors';
// import Attach from '@/style/images/atta/chment.png';

const { Header, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

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

function ThreeDotMenu() {
  const menu = (
    <Menu>
      <Menu.Item key="1">Clone</Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
      <Menu.Item key="3">Print Preview</Menu.Item>
      <Menu.Item key="4">Find and Merge Duplicates</Menu.Item>
      <Menu.Item key="5">Mail Merge</Menu.Item>
      <Menu.Item key="6">Run Macro</Menu.Item>
      <Menu.Item key="7">Customize Bussiness Card</Menu.Item>
      <Menu.Item key="8">Organize Lead Details</Menu.Item>
      <Menu.Item key="9">Add Related List</Menu.Item>
      <Menu.Item key="10">Review History</Menu.Item>
      <Menu.Item key="11">Create Button</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <EllipsisOutlined />
      </a>
    </Dropdown>
  );
}

const Show = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [showTitleField, setShowTitleField] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Upload File');
  const [sortingOption, setSortingOption] = useState('Recent First');
  const [notes, setNotes] = useState([]);
  const item = useSelector(selectCurrentItem);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    console.log(item);
  }, []);
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleUpload = () => {
    if (selectedOption === 'Upload File' && selectedFile) {
      console.log('Uploading file:', selectedFile);
    } else if (selectedOption === 'Documents') {
      console.log('Uploading Documents');
    } else if (selectedOption === 'Link (URL)') {
      console.log('Uploading Link:', selectedFile);
    } else {
      console.log('No file selected or unsupported option');
      message.error('No file selected or unsupported option');
    }
  };

  const handleInputClick = () => {
    setShowTitleField(true);
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const handleSortingChange = (value) => {
    setSortingOption(value);
  };

  const renderNotes = () => {
    const sortedNotes = sortingOption === 'Recent First' ? notes.slice().reverse() : notes;

    return sortedNotes.map((note, index) => (
      <div key={index}>
        <Input.TextArea value={note} rows={5} style={{ marginBottom: '10px' }} />
      </div>
    ));
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
          <ArrowLeftOutlined />
          <Avatar size={64} icon={<UserOutlined />} />
        </Space>
        <h1 className="lead-name">Mr. James Merced (Sample)</h1>
        <div style={{ paddingLeft: '300px' }}></div>
        <div style={{ marginLeft: 'auto' }}>
          <Button type="primary" onClick="">
            <MailOutlined />
            Send Email
          </Button>
          <span> </span>
          <Button>Convert</Button>
          <span> </span>
          <Button>Edit</Button>
          <span> </span>
          <Button>
            <ThreeDotMenu />
          </Button>
        </div>
        <span> </span>
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
          <Tabs defaultActiveKey="Overview">
            <Tabs.TabPane tab="Overview" key="Overview" className="overview">
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
              <br />
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
                      onChange={handleSortingChange}
                    >
                      <Option value="Recent First">Recent First</Option>
                      <Option value="Recent Last">Recent Last</Option>
                    </Select>
                  </Space>
                }
              >
                <div className="notes bg-white rounded">
                  <div className="notediv">
                    {showTitleField && (
                      <Input
                        style={{ width: '100%', marginBottom: '5px' }}
                        type="text"
                        placeholder="Add a title"
                      />
                    )}
                    <TextArea
                      placeholder="Enter your text here"
                      rows={5}
                      style={{ marginTop: showTitleField ? '5px' : '0' }}
                    />

                    {!showTitleField && (
                      <Input
                        className="noteinput"
                        type="text"
                        placeholder="Add a title"
                        onClick={handleInputClick}
                      />
                    )}

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
              <br />
              <Card
                style={{ width: '100%' }}
                className="shadow p-2 mb-5 bg-white rounded"
                title="Attachment"
                extra={
                  <Space wrap>
                    <Select
                      defaultValue="Attach"
                      style={{ width: 120 }}
                      onChange={handleOptionChange}
                      options={[
                        {
                          value: 'Upload File',
                          label: (
                            <a>
                              <img src={File} height="17px" width="17px"></img>
                              <span> </span> Upload File
                            </a>
                          ),
                        },
                        {
                          value: 'Documents',
                          label: (
                            <a>
                              <img src={Docs} height="17px" width="17px"></img>
                              <span> </span>Documents
                            </a>
                          ),
                        },
                        {
                          value: 'Link (URL)',
                          label: (
                            <a>
                              <img src={Link} height="17px" width="17px"></img>
                              <span> </span>Link (URL)
                            </a>
                          ),
                        },
                        // { value: 'disabled', label: 'Disabled', disabled: true },
                      ]}
                    />
                  </Space>
                }
              >
                {selectedOption === 'Link (URL)' ? (
                  <Input placeholder="Enter URL" style={{ width: '70%' }} />
                ) : (
                  <input type="file" onChange={handleFileChange} />
                )}
                <Button type="primary" onClick={handleUpload}>
                  Upload
                </Button>
              </Card>
              <br />
              <br />

              <Card
                style={{ width: '100%' }}
                className="shadow p-2 mb-5 bg-white rounded"
                title="Emails"
                extra={
                  <Button type="wheat" style={{ color: 'light blue' }}>
                    <MailOutlined />
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
            </Tabs.TabPane>

            {/* Timeline Tab */}
            <Tabs.TabPane tab="Timeline">
              <Card
                style={{ marginTop: 16, width: '100%' }}
                className="shadow p-2 mb-5 bg-white rounded"
                type="white"
                title="Upcoming Actions"
              >
                No Upcoming Actions
              </Card>
              <br />
              <Card
                style={{ marginTop: 16, width: '100%' }}
                className="shadow p-2 mb-5 bg-white rounded"
                type="white"
                title="History"
              >
                <Timeline>
                  <Timeline.Item>
                    Lead image uploaded <br />
                    by Fathima Nihala on
                    <br />
                    Feb 10 2024
                  </Timeline.Item>
                </Timeline>
              </Card>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
};

export default Show;
