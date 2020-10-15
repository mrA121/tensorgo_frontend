import React from 'react';
import { Layout, Menu,Modal, Pagination } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import Card from './Card/Card';
import Form from './Form/Form';


import './App.css';

const { Header, Content, Footer, Sider } = Layout;


class App extends React.Component {
  state = { visible: false,data:[],page_number:1,max_page:50,selected_userId:1};

  

  showModal = (id) => {
    this.setState({
      visible: true,
      selected_userId:id
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  componentDidMount(){

    

    this.setState({data:[{id:1,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:2,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:3,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:4,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:5,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:6,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:7,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:8,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'},
    {id:9,name:'Shivank',email:'royshivank@gmail.com',gender:'Male',status:'Active'}
  ]})
  }
  
  render(){
  return (
    <div className="App">
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" >
        <h1>Go Rest Users</h1>
        </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Upload Items
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Download Items
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
          {this.state.data.map(element=>{
            return <Card key={element.id} name={element.name} email={element.email} gender={element.gender} status={element.status} openModal={this.showModal.bind(this,element.id)}/>
          })}
          
          <Modal
            title="Edit Form"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
        >
          
            <Form val={this.state.data.filter(val=>val.id=this.state.selected_userId)} />
           
        </Modal>
        </div>
      </Content>

      <Footer ><Pagination defaultCurrent={this.state.page_number} total={this.state.max_page} /></Footer>

    </Layout>
  </Layout>,     
  </div>
  );}

}
export default App;
