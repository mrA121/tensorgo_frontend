import React from 'react';
import { Form, Input, Select } from 'antd';
import './Form.css'

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


class Demo extends React.Component {
    formRef = React.createRef();
    onFinish = (values) => {
      console.log(values);
    };
    // onReset = () => {
    //   this.formRef.current.resetFields();
    // };
    // onFill = () => {
    //   this.formRef.current.setFieldsValue({
    //     note: 'Hello world!',
    //     gender: 'male',
    //   });
    // };
  
    render() {
      return (
        <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>

          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
            value={this.props.val.name}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
            value={this.props.val.email}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
            value={this.props.val.gender}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
              },
            ]}
            value={this.props.val.status}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>

        </Form>
      );
    }
  }

  export default Demo;