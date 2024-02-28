import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, Button, Card, Input, Select, Dropdown, Space, Avatar, message } from 'antd';
import { UserOutlined, MailOutlined, ArrowLeftOutlined, EllipsisOutlined } from '@ant-design/icons';
import './style.css';
import Docs from './google-docs.png';
import File from './file.png';
import Link from './link.png';
import Attach from './attachment.png';

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
      <Menu.Item key="6">Run Macro</Menu.Item><Menu.Item key="1">Clone</Menu.Item>
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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          marginTop: '57px',
          height: '80px'
        }}
      >
        <Space wrap size={16}>
          <ArrowLeftOutlined />
          <Avatar size={64} icon={<UserOutlined />} />
        </Space>
        <h1 style={{paddingLeft:"10px"}}>Mr. James Merced (Sample)</h1>
        <div style={{ paddingLeft: '300px' }}></div>
        <div style={{ marginLeft: 'auto' }}>
          <Button type="primary" onClick=""><MailOutlined />Send Email</Button><span> </span>
          <Button>Convert</Button><span>  </span>
          <Button>Edit</Button><span>  </span>
          <Button><ThreeDotMenu /></Button>
        </div>
        <span>  </span>
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
      </Header>
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
            className='shadow p-2 mb-5 bg-white rounded'
          >
            <table border={0} cellPadding={5} cellSpacing={10}>
              <tr>
                <td>Lead Owner</td>
                <td><input className='inputField' value="Fathima Nihala" type="text" /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input className='inputField' value="nihala@gmail.com" type="email" /></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td><input className='inputField' value="09876543234" type="text" /></td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td><input className='inputField' value="09876546546" type="text" /></td>
              </tr>
              <tr>
                <td>Lead Status</td>
                <td><input className='inputField' value="Lead Lost" type="text" /></td>
              </tr>
            </table>
          </Card>
          <br />
          <br />

          <Card
            style={{ marginTop: 16 }}
            type="white"
            title="Notes"
            extra={
              <Space wrap>
                <Select
                  defaultValue="Recent First"
                  style={{ width: 120 }}
                  onChange={handleSortingChange}
                >
                  <Option value="Recent First">Recent First</Option>
                  <Option value="Recent Last">Recent Last</Option>
                </Select>
              </Space>
            }
          >
            <div className='notes bg-white rounded'>
              <div className='notediv'>
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
                    className='noteinput'
                    type="text"
                    placeholder="Add a title"
                    onClick={handleInputClick}
                  />
                )}

                <div className='notebtn'>
                  <Button type="primary">Save</Button>
                  <Button type="default" style={{ marginLeft: '5px' }}>Cancel</Button>
                </div>
              </div>
            </div>
          </Card>
          <br />
          <br />

          <Card
            style={{ width: '100%' }}
            className='shadow p-2 mb-5 bg-white rounded'
            title="Attachment"
            extra={
              <Space wrap>
                <Select
                  defaultValue="Attach"
                  style={{ width: 120 }}
                  onChange={handleOptionChange}
                  options={[
                    { value: 'Upload File',   label: (
      <a><img src={File} height="17px" width='17px'></img>
       <span> </span> Upload File
      </a>
    ), },
                    { value: 'Documents',  label: (
      <a><img src={Docs} height="17px" width='17px'></img>
         <span> </span>Documents
      </a>), },
                    { value: 'Link (URL)',  label: (
      <a><img src={Link} height="17px" width='17px'></img>
         <span> </span>Link (URL)
      </a>), },
                    // { value: 'disabled', label: 'Disabled', disabled: true },
                  ]}
                />
              </Space>
            }
          >
            {selectedOption === 'Link (URL)' ? (
              <Input placeholder="Enter URL" />
            ) : (
              <input type="file" onChange={handleFileChange} />
            )}
            <Button type="primary" onClick={handleUpload}>Upload</Button>
          </Card>
          <br />
          <br />

          <Card
            style={{ width: '100%' }}
            className='shadow p-2 mb-5 bg-white rounded'
            title="Emails"
            extra={<Button type='wheat' style={{ color: 'light blue' }}><MailOutlined />Compose Email</Button>}
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={onTab1Change}
          >
            {contentList[activeTabKey1]}
          </Card>
          <br />
          <br />
        </div>
      </Content>
    </Layout>
  );
};

export default Show;
