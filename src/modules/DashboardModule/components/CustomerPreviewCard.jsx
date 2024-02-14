import { Statistic, Progress, Divider, Row, Spin } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default function CustomerPreviewCard({
  isLoading = false,
  activeCustomer = 0,
  newCustomer = 0,
}) {
  return (
    <Row className="gutter-row" >
      <div className="whiteBox shadow" style={{ minHeight: '380px', height: '100%', backgroundColor:'black', color:'white'}}>
        <div
          className="pad20"
          style={{
            textAlign: 'center',
            justifyContent: 'center',
        
          }}
        >
          <h3 style={{ color: 'white', marginBottom: 30 }}>Customer Preview</h3>

          {isLoading ? (
            <Spin />
          ) : (
            <div
              style={{
                color:'white',
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              <Progress type="dashboard" percent={newCustomer} width={148} />
              <p>New Customer this Month</p>
              <Divider />
              <Statistic
              
                title="Active Customer"
           
                value={activeCustomer}
                precision={2}
                valueStyle={

                  // color default gray
                  activeCustomer > 0
                    ? { color: 'white' }
                    : activeCustomer < 0
                    ? { color: 'white' }
                    : { color: 'white' }
                }
                prefix={
                  activeCustomer > 0 ? (
                    <ArrowUpOutlined />
                  ) : activeCustomer < 0 ? (
                    <ArrowDownOutlined />
                  ) : null
                }
                suffix="%"
              />
            </div>
          )}
        </div>
      </div>
    </Row>
  );
}
