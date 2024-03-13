import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import LeadForm from '@/forms/LeadForm';
import { useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
// import { selectUploadedItem } from '@/redux/crud/selectors';
import { useSelector } from 'react-redux';

function AddLead (){
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState()
  const [uploadedImage,setUploadedImage]=useState(null)
  
  // const { result: filePath } = useSelector(selectUploadedItem);




  const createLead = (values) => {


    const data={
       "photo": file,
       "firstName":values.firstName,
       "lastName": values.lastName,
       "email": values.email,
        "contactNumber":values.contactNumber,
        "parentContact":values.parentContact,
       "passYear": values.passYear,
       "joinDate": values.joinDate,
       "gender": values.gender,
       "qualification": values.qualification,
       "techOpted": values.techOpted,
       "college": values.college,
       "leadSource":  values.leadSource,
       "leadStatus": values.leadStatus,
       "trainingMode": values.trainingMode,
       "city": values.city,
       "street": values.street,
       "state": values.state,
       "country": values.country,
       "zipcode": values.zipcode,
       "description": values.description

    }
   console.log("datatosend--->",data)

     dispatch(crud.create({ entity: 'lead', jsonData: data }))
  
  }
 
  const handleImageChange = useCallback( async (event) => {
    const file = event.target.files[0];
    setFile(file);
    
    if (file) {
      try {
       
         console.log(file)      
        
         //dispatch(crud.upload({ entity: 'lead', jsonData: formData }));    
     
          console.log("uploadedimage",uploadedImage);

          const reader= new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend=()=>{
            setAvatar(reader.result);
                 
       }
      
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  })

  
  // useEffect(()=>{
  //   setUploadedImage(filePath);

  // },[filePath,handleImageChange])


 


  const handleAvatarClick = () => {
    document.getElementById('avatarInput').click();
  };
return(
 <>  
   <Form
        onFinish={createLead}
        encType='multipart/form-data'
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
          onClick={handleImageChange}
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