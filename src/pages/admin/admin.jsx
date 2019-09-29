import  React,{Component} from 'react'
import  Redirect from 'react-dom'
import memoryUtils from "../../utils/memoryUtils";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
export  default  class Admin extends  Component{
    render() {
        const user=memoryUtils.user;
        if(!user||!user.id){
            return <Redirect to='/login'/>
        }
        return <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    }
}