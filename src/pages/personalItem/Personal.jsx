import React, {Component} from 'react';
import {Modal, Button, Tabs, Icon, Form} from 'antd';

import Header from '../home/Header';

import MyOrder from './MyOrder';
import defaultBannar from './defaultbannar.jpg';
import girl from './girl.png';
import Upload from './Upload.jsx'

import PersonalItem from './PersonalItem';
import './style.less';
import {connect} from "../../models";
import PropTypes from "prop-types";

const TabPane = Tabs.TabPane;

export const PAGE_ROUTE = '/Personal';
@connect()
@Form.create()

export default class Personal extends Component {
    state = {
        visible: false,
        name: '',
        path: '',
        preview: null,
        data: null,
        progress:0
    };
    changeName = (e) => {
        this.setState({ name: e.target.value })
    };

    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    };

    //选择文件
    changePath = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        let src,preview,type=file.type;

        // 匹配类型为image/开头的字符串
        if (/^image\/\S+$/.test(type)) {
            src = URL.createObjectURL(file)
            preview = <img src={src} alt='' width={300}/>
        }
        // 匹配类型为video/开头的字符串
        else if (/^video\/\S+$/.test(type)) {
            src = URL.createObjectURL(file)
            preview = <video src={src} autoPlay loop controls />
        }
        // 匹配类型为text/开头的字符串
        else if (/^text\/\S+$/.test(type)) {
            const self = this;
            const reader = new FileReader();
            reader.readAsText(file);
            //注：onload是异步函数，此处需独立处理
            reader.onload = function (e) {
                preview = <textarea value={this.result} readOnly></textarea>
                self.setState({ path: file.name, data: file, preview: preview })
            }
            return;
        }

        this.setState({ path: file.name, data: file, preview: preview })
    }

    upload = () => {
        const data = this.state.data;
        if (!data) {
            console.log('未选择文件');
            return;
        }
        const url = 'http://localhost:3000/api/upload';  // 此处的url应该是服务端提供的上传文件api
        const form = new FormData();

        form.append('file', data);  // 此处的file字段由上传的api决定，可以是其它值

        // fetch方式暂不支持progress events事件

        /*  fetch(url, {
            method: 'POST',
            body: form
        }).then(res => {
            console.log(res)
        }) */

        // 改为使用ajax实现上传并添加显示进度条功能

        const xhr = new XMLHttpRequest();
        this.xhr = xhr
        xhr.upload.addEventListener('progress', this.uploadProgress, false);  // 第三个参数为useCapture?，是否使用事件捕获/冒泡

        // xhr.addEventListener('load',uploadComplete,false);
        // xhr.addEventListener('error',uploadFail,false);
        // xhr.addEventListener('abort',uploadCancel,false)

        xhr.open('POST', url, true);  // 第三个参数为async?，异步/同步
        xhr.send(form);
    }

    uploadProgress = (e) => {
        if (e.lengthComputable) {
            const progress = Math.round((e.loaded / e.total) * 100);
            this.setState({ progress: progress })
        }
    }

    componentWillUnmount() {
        this.xhr.upload.removeEventListener('progress', this.uploadProgress, false)
    }

    //关闭模态框
    cancel = () => {
        this.props.closeOverlay();
    }
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

    render() {
        let uuid = sessionStorage.getItem('uuid');
        const { name, path, preview } = this.state;
        return (
            <div>
                <Header theme="dark" background="black"/>
                <div className="people-home">
                    <div className="bg-image">
                        <img src={defaultBannar} alt="" tit=""/>
                    </div>
                </div>
                <div className="home-information-wrap">
                    <div className="information-headimg-box">
                        <img src={girl} alt="" tit="" width="115px"/>
                    </div>
                </div>
                <div className="upload">
                    <Button type="primary" onClick={this.showModal}><Icon type="heart"/>修改头像</Button>
                </div>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    style={{margin: '40px 0 0 40px',}}
                >
                    <TabPane tab={<span><Icon type="user"/>个人中心</span>} key="1">
                        <PersonalItem uuid={uuid}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="bars"/>订单中心</span>} key="2">
                        <MyOrder/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="upload"/>上传课程</span>} key="3">
                        <Upload/>
                    </TabPane>
                </Tabs>
                <Modal
                    title="修改头像"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <div>
                            <h4>上传文件</h4>
                            <div className='row'>
                                <label>文件名称</label>
                                <input type='text' placeholder='请输入文件名' value={name} onChange={this.changeName} />
                            </div>
                            <div className='row'>
                                <label>文件路径</label>
                                <div className='row-input'>
                                    <span>{path ? path : '请选择文件路径'}</span>
                                    <input type='file' accept='video/*,image/*,text/plain' onChange={this.changePath} />
                                </div>
                            </div>
                            <div className='media'>
                                {preview}
                            </div>
                            <button className='primary upload' onClick={this.upload}>上传</button>
                            <button className='primary cancel' onClick={this.cancel}>取消</button>
                        </div>
                        <div className='progressWrap'>
                            <div className='progress' style={{ width: `${this.state.progress}%` }} />
                            <span className='progress-text' style={{left:`${this.state.progress}%`}}>{this.state.progress}%</span>
                        </div>
                    </Form>
                </Modal>

            </div>
        );
    }
}

