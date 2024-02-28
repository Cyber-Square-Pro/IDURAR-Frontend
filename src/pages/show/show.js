import React from 'react';
import { Breadcrumb, Layout, Menu, Button, Card, Input,Dropdown,message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
                    height:'80px'
                }}
            >
                <Space wrap size={16}>
                    <Avatar size={64} icon={<UserOutlined />} /></Space>
                <h1>Mr. James Merced (Sample)</h1>
                <div style={{paddingLeft:'300px'}}></div>
                <div style={{ marginLeft: 'auto' }}>
                    <Button type="primary">Send Email</Button><span>  </span>
                    <Button>Convert</Button><span>  </span>
                    <Button>Edit</Button><span>  </span>
                   
                    
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
                                <td><input className='inputField' type="text" /></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input className='inputField' type="text" /></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td><input className='inputField' type="text" /></td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td><input className='inputField' type="text" /></td>
                            </tr>
                            <tr>
                                <td>Lead Status</td>
                                <td><input className='inputField' type="text" /></td>
                            </tr>
                        </table>

                    </Card>
                    <br />
                    <br />

                    <Card
                        style={{
                            marginTop: 16,
                        }}
                        type="white"
                        title="Notes"
                        extra={<Space wrap>
                            <Select
                                defaultValue="Recent First"
                                style={{
                                    width: 120
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'Recent First',
                                        label: 'Recent Fist',
                                    },
                                    {
                                        value: 'Recent First',
                                        label: 'Recent Fist',
                                    },
                                ]}
                            /></Space>}
                    >

                        <div className='notes bg-white rounded'>
                            <div className='notediv'>
                                <TextArea placeholder="Enter your text here" rows={5}></TextArea>

                                {showTitleField && <Input style={{ width: '50%', marginTop: '5px', position: 'absolute', top: '4px', left: '5px' }} type="text" placeholder="Title" />}

                                <Input
                                    className='noteinput'

                                    type="text"
                                    placeholder="Add a title"
                                    onClick={handleInputClick}
                                />
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
                        className='shadow p-2 mb-5 bg-white rounded'

                        type="white"
                        title="Attachment"
                        extra={<Space wrap>
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
                            /></Space>}
                    >

                        NO ATTACHMENT
                    </Card>

                    <br />
                    <br />

                    <Card
                        style={{
                            width: '100%',
                        }}
                        className='shadow p-2 mb-5 bg-white rounded'
                        title="Emails"
                        extra={<Button type='wheat' style={{ color: 'light blue' }}>Compose Email</Button>}
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
