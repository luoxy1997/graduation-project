import React, {Component} from 'react'
import {Input, Modal, Icon, Form} from 'antd';
import './style.less';
import {connect} from "../../models";
import {ajaxHoc} from "../../commons/ajax";

@Form.create()
@connect(state => {
    const {userData} = state.userData;
    return {userData};
})
@ajaxHoc()
export default class PersonalItem extends Component {
    state = {
        visible: false,
        passwordVisible: false
    };



    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    showPasswordModal = () => {
        this.setState({
            passwordVisible: true,
        });

    };
    handlePasswordOk = () => {
        const fields = ['userPassword'];
        const {uuid} = this.props;
        this.props.form.validateFieldsAndScroll(fields,(err,value) =>{
            this.props.ajax.post('/common/login/updateUser',{...value,uuid})
                .then(res=>{

                })
        });

        this.setState({
            passwordVisible: true,
        });
    };

    handlePasswordCancel = () => {
        this.setState({
            passwordVisible: false,
        });
    };

    render() {
        console.log(this.props.uuid);
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 18},
            },
        };
        return (
            <div className="right-container">
                <div className="right-title">
                    <h2>个人中心</h2>
                    <a onClick={this.showModal}><Icon type="edit" style={{paddingRight: '10px'}}/>编辑资料</a>
                    <a onClick={this.showPasswordModal}><Icon type="lock" style={{paddingRight: '10px'}}/>修改密码</a>
                </div>
                <div className="personalMsg">
                    <div className="myMsg">
                        <div className="info-box clearfix">
                            <label className="pull-left">昵称</label>
                            <div>抹茶味的胡萝卜</div>
                        </div>
                        <div className="info-box clearfix">
                            <label className="pull-left">性别</label>
                            <div>女</div>
                        </div>
                        <div className="info-box clearfix">
                            <label className="pull-left">年龄</label>
                            <div>200</div>
                        </div>
                        <div className="info-box clearfix">
                            <label className="pull-left">联系电话</label>
                            <div>12345678</div>
                        </div>
                        <div className="info-box clearfix">
                            <label className="pull-left">个性签名</label>
                            <div>未设置</div>
                        </div>

                    </div>
                </div>
                <Modal
                    title="修改个人资料"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={600}
                >
                    <Form onSubmit={this.handleSubmit} style={{width: '400px', margin: '0 auto'}}>
                        <Form.Item
                            {...formItemLayout}
                            label="昵称"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="性别"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="年龄"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="联系电话"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="个性签名"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>

                    </Form>
                </Modal>
                <Modal
                    title="修改密码"
                    visible={this.state.passwordVisible}
                    onOk={this.handlePasswordOk}
                    onCancel={this.handlePasswordCancel}
                    width={600}
                >
                    <Form onSubmit={this.handleSubmit} style={{width: '400px', margin: '0 auto'}}>
                        <Form.Item
                            {...formItemLayout}
                            label="新密码"
                        >
                            {getFieldDecorator('userPassword', {
                                rules: [ {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="确认密码"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

