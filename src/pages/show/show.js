import React from 'react'
import { Card, Form, Input, Button, Select } from 'antd';
import './style.css'
function show() {
  return (
    
    <div style={{marginTop:"5"}} className='mt-6'>
        <Card className='shadow p-2 mb-5 bg-white rounded' style={{ width: '100%' }}>
       <h1>hi</h1>
      <div class="form-group">
          <table border={0} cellPadding={5} cellSpacing={10}>
            <tr>
            <td style={{ paddingRight: '60px' }}>Lead Owner</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
            <td style={{ paddingRight: '60px' }}>Email</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
            <td style={{ paddingRight: '60px' }}>Phone</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
            <td style={{ paddingRight: '60px' }}>Mobile</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
            <td style={{ paddingRight: '60px' }}>Lead Status</td>
                <td><input type="text" /></td>
            </tr>
           </table>
           </div>
      </Card>
    </div>
  )
}

export default show