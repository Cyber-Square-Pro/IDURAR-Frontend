import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import LeadForm from '@/forms/LeadForm';
import { useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';

function AddLead (){
const dispatch=useDispatch();  
const [avatar, setAvatar] = useState(null);

  const createLead=(values)=>{   
    values.image=avatar;
    
    console.log("lead created",values)

    dispatch(crud.create({entity:'lead',jsonData:values}))
    
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
       reader.readAsDataURL(file);

      reader.onloadend = () => {
        console.log(reader.result);
        setAvatar(reader.result);
      };
      // reader.readAsDataURL(file);
    }
  };
  
  const handleAvatarClick = () => {
    document.getElementById('avatarInput').click();
  };

return(
 <>  
   <Form
        onFinish={createLead}
        >
 <Form.Item>
{/* <div style={{ marginLeft: '50px' }}>
    <h2 style={{ marginBottom: '30px' }}></h2> */}
    <h2>Create Lead</h2>
    <hr style={{ color:'gray'}}></hr>

    <h3 style={{ marginBottom: '30px', marginTop: '40px' }}>Lead Image</h3>
    <input
        id="avatarInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <Form.Item name='image'>
      {avatar ? (
        <Avatar
          size={64}
          src={avatar}
          style={{ marginLeft: '10px', cursor: 'pointer' }}
          onClick={handleAvatarClick}
        />
      ) : (
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ marginLeft: '10px', cursor: 'pointer' }}
          onClick={handleAvatarClick}
        />
        )}

      </Form.Item>
   
    
  {/* </div> */}
</Form.Item>
          <LeadForm/>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  // loading={isLoading}
                  size="large"
                >
                 submit
                </Button>
              </Form.Item>

   </Form>
    </>
)
}
export default AddLead;