import React, {Component} from 'react'
import {connect} from "../../models/index";
import './style.less';
import topAd from './topAd.jpg';
import {Menu, Icon, Row, Input, Col, Button, Modal, Tabs, Form, Checkbox, Popconfirm, message, Spin} from 'antd';
import logo from './logo.png';
import {ajaxHoc} from "../../commons/ajax";
import PropTypes from "prop-types";
import QRCode from 'qrcode.react';

const TabPane = Tabs.TabPane;
@Form.create()
@ajaxHoc()
@connect()

export default class Header extends Component {
    state = {
        current: 'mail',
        userLogin: window.sessionStorage.getItem("uuid"),
        userNickName: window.sessionStorage.getItem("userName"),
        visible: false,
        index: 0,
        spinning: false
    };
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    };


    // 注册
    handleRegister = () => {
        const fields = ['userAccount', 'userPassword', 'userEmail'];
        this.props.form.validateFieldsAndScroll(fields, (err, value) => {
            const params = {userAccount: value.userName, userPassword: value.password}
            this.props.ajax.post('/common/login/insertUserVal', value)
                .then(() => {

                })
        });

    };
    // 登录
    handleSubmit = () => {
        const fields = ['userName', 'password'];
        this.props.form.validateFieldsAndScroll(fields, (err, value) => {
            const params = {userAccount: value.userName, userPassword: value.password};
            this.props.ajax.get('/common/login/into', params)
                .then((res) => {
                    this.setState({userNickName: res.data.userName, userLogin: true, visible: false})
                    window.sessionStorage.setItem("uuid", res.data.uuid);
                    window.sessionStorage.setItem("userName", res.data.userName);
                })
        });
    };

    // 退出登录
    handleLogOut = () => {
        this.setState({spinning: true});
        setTimeout(() => {
            window.sessionStorage.removeItem("uuid");
            window.sessionStorage.removeItem("userName");
            this.setState({userLogin: false, userNickName: null, spinning: false});
            message.success('您已退出慕课网(￣▽￣)~*');
        }, 2000)

    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    handleLogin = () => {
        this.setState({visible: true});
    };
    handleCancel = () => {
        this.setState({visible: false});
    };

    componentDidMount() {
        setTimeout(this.props.action.page.hideHead);
    }

    callback = (key) => {
        console.log(key);
    };
    handlePersonal = () => {
        this.props.history.push('/Personal')
    }


    render() {
        const {userLogin} = this.state;
        const {form: {getFieldDecorator}} = this.props;
        const userShow = userLogin ?
            <Menu.Item key="appd3qwe">
                <Button type="primary" size="small">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Button type="dashed" size="small" onClick={this.handlePersonal}>个人中心</Button>
                &nbsp;&nbsp;
                <Popconfirm title="确认要退出此账号?" onConfirm={this.handleLogOut}>
                    <Button type="danger" size="small">退出</Button>
                </Popconfirm>

            </Menu.Item>
            :
            <Menu.Item key="appdasdd3">
                <Button type="dashed" size="small" onClick={this.handleLogin}>注册/登录</Button>
                {/*<QRCode value="wxp://f2f1J1pUoSkm2wR4eLg7fncTJQc5gTif_Ybc" />*/}
            </Menu.Item>;
        return (
            <div style={{position: 'relative'}}>
                <Spin spinning={this.state.spinning}>
                    <img src={topAd} alt='topAd' tit="21" width='100%' style={{position: 'relative', top: 0, height: '45px'}}/>
                    <Row style={{lineHeight: '48px', boxShadow: '0 4px 8px 0 rgba(7,17,30,.1)', background: this.props.background}}>
                        <Col span={2}></Col>
                        <Col span={4}>
                            <a href="/" className="logo">
                                <img src={logo} alt="" tit="" width={85}/>
                            </a>
                        </Col>
                        <Col span={16}>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                                style={{borderBottom: 'none'}}
                                theme={this.props.theme}
                            >
                                <Menu.Item key="mail">
                                    <Icon type="mail"/>免费课程
                                </Menu.Item>
                                <Menu.Item key="app">
                                    实战课程
                                </Menu.Item>
                                <Menu.Item key="app1">
                                    就业班
                                </Menu.Item>
                                <Menu.Item key="app2">
                                    专栏
                                </Menu.Item>
                                <Menu.Item key="app3">
                                    手记
                                </Menu.Item>
                                <Menu.Item key="appd3">
                                    <Input style={{width: '200px', height: '32px', border: 'none', borderBottom: '1px solid #ddd'}}/><Icon type="search" style={{color: 'rgba(0,0,0,.25)', position: 'relative', right: '22px'}}/>
                                </Menu.Item>
                                {userShow}

                            </Menu>
                        </Col>
                        <Col span={2}></Col>
                        <Modal
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            footer={null}
                            width={500}
                        >
                            <Tabs defaultActiveKey="login" onChange={this.callback}>
                                <TabPane tab="登录" key="login">
                                    <Form className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('userName', {
                                                rules: [{required: true, message: 'Please input your username!'}],
                                            })(
                                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入用户名"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                                rules: [{required: true, message: 'Please input your Password!'}],
                                            })(
                                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="请输入密码"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            })(
                                                <Checkbox>记住密码</Checkbox>
                                            )}
                                            <a className="login-form-forgot" href="">忘记密码</a>
                                            或<a href="">立即注册!</a>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" icon="smile" style={{width: '100%'}} onClick={this.handleSubmit}>登录</Button>
                                        </Form.Item>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="register">
                                    <Form className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('userAccount', {
                                                rules: [{required: true, message: 'Please input your username!'}],
                                            })(
                                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入用户名"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('userEmail', {
                                                rules: [{required: true, message: 'Please input your Password!'}],
                                            })(
                                                <Input prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="请输入邮箱"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('userPassword', {
                                                rules: [{required: true, message: 'Please input your Password!'}],
                                            })(
                                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="请输入密码"/>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            })(
                                                <Checkbox>同意《慕课网注册协议》
                                                </Checkbox>
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" icon="smile" style={{width: '100%'}} onClick={this.handleRegister}>注册</Button>
                                        </Form.Item>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Row>
                </Spin>
            </div>
        );
    }
}
