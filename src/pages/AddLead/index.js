import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import LeadForm from '@/forms/LeadForm';
import { useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { selectUploadedItem } from '@/redux/crud/selectors';
import { useSelector } from 'react-redux';

function AddLead (){
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState()
  const inputFileRef=useRef(null);
  const [uploadedImage,setUploadedImage]=useState(null)
  
  const { result: filePath } = useSelector(selectUploadedItem);




  const createLead = async (values) => {

   try{     

        const fileFormData= new FormData();
          fileFormData.append("photo",file)
          try{
              await  dispatch(crud.upload({ entity: 'lead', jsonData: fileFormData}));   
              if(filePath){

                values.file=filePath;
                 dispatch(crud.create({ entity: 'lead', jsonData: values }))
              } 
          }catch(error){
          }

   }catch(error){
    console.log(error)
   }



  
  }
 
  const handleImageChange = useCallback( async (event) => {
    const file = event.target.files[0];
    setFile(file);
    
    
    // if (file) {
    //   try {
       
    //      console.log(file)      
        
    //      //dispatch(crud.upload({ entity: 'lead', jsonData: formData }));    
     
    //       console.log("uploadedimage",uploadedImage);

          const reader= new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onloadend=()=>{
            setAvatar(reader.result);
                 
          }
      
    //   } catch (error) {
    //     console.error('Error uploading image:', error);
    //   }
    // }
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
        // name='file'
        //  ref={inputFileRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <Form.Item >
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