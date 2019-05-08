import React, {Component} from 'react'
import {connect} from "../../models/index";
import './style.less';
import topAd from './topAd.jpg';
import {Menu, Icon, Row, Input, Col, Button, Modal, Tabs, Form, Checkbox, Popconfirm, message, Spin} from 'antd';
import logo from './logo.png';
import {ajaxHoc} from "../../commons/ajax";
import PropTypes from "prop-types";
import Login from './Login'
import {hashHistory} from 'react-router'

const TabPane = Tabs.TabPane;
@Form.create()
@ajaxHoc()
@connect()
export default class Header extends Component {
    state = {
        current: 'mail',
        userLogin: window.sessionStorage.getItem("user") !== null && JSON.parse(window.sessionStorage.getItem("user")).uuid,
        userNickName: window.sessionStorage.getItem("user") !== null && JSON.parse(window.sessionStorage.getItem("user")).userName,
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


    // 退出登录
    handleLogOut = () => {
        this.setState({spinning: true});
        setTimeout(() => {
            window.sessionStorage.removeItem("uuid");
            window.sessionStorage.removeItem("userName");
            this.setState({userLogin: false, userNickName: null, spinning: false});
            message.success('您已退出云课网(￣▽￣)~*');
        }, 2000)

    };

    handleClick = (e) => {
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

    handlePersonal = () => {
        this.context.router.history.push('/Personal')

    };


    render() {
        const userShow = this.state.userLogin ?
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
                                <Menu.Item key="home" onClick={() => {
                                    this.context.router.history.push('/')
                                }}>
                                    首页
                                </Menu.Item>
                                <Menu.Item key="app" onClick={() => {
                                    this.context.router.history.push('/mall')
                                }}>
                                    积分商城
                                </Menu.Item>
                                <Menu.Item key="app1" onClick={() => {
                                    this.context.router.history.push('/mall')
                                }}>
                                    就业班
                                </Menu.Item>
                                <Menu.Item key="app2" onClick={() => {
                                    this.context.router.history.push('/mall')
                                }}>
                                    专栏
                                </Menu.Item>
                                <Menu.Item key="app3" onClick={() => {
                                    this.context.router.history.push('/mall')
                                }}>
                                    手记
                                </Menu.Item>
                                {userShow}

                            </Menu>
                        </Col>
                        <Col span={2}></Col>

                    </Row>
                </Spin>
                <Login
                    visible={this.state.visible}
                    cancel={(user) => {
                        this.setState({visible: false});
                    }}
                />
            </div>
        );
    }
}
