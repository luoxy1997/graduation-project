import React, {Component} from 'react';
import './style.less';
import {Form, Row, Col, message, Icon, Modal} from 'antd';
import teacherAvatar1 from './teacherAvatar1.jpg';


export default class VideoItem extends Component {
    state = {
        visible: false,
        type: true
    };

    showModal = () => {
        this.setState({
            visible: true,
            type: true
        });
        message.success('您还未购买这门课程，享受5分钟试看', 5);
        setTimeout(() => {
            this.setState({type: false})
        }, 5000)

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
        return (
            <div className="info-video">
                <div className="info-box">
                    <div className="video-btn" onClick={this.showModal}>
                        <Icon type="play-circle" className="play-btn"/>
                        <p>
                            观看试看视频
                        </p>
                    </div>
                </div>
                <div className="video-info">
                    <div className="content-wrap">
                        <div className="content">
                            <div className="con">
                                <div className="info-name">
                                    WebRTC实时互动直播技术入门与实战 5G时代必备技能
                                </div>
                                <div className="info-desc">
                                    5G时代下，音视频行业将会得到前所未有的蓬勃发展，音视频人才将成为新的宠儿。本课程将从入门到实战，系统讲解WebRTC实时互动直播技术【音视频领域核心技术】，让你低门槛进入音视频行业，快速成为企业急需的音视频工程师。让你对整个 WebRTC技术的使用有非常深入的掌握，并有能力实现一套1对1音视频实时互动直播系统，并可以与其它终端进行互联。而这些能力正是当下企业急需的能力。还在等什么，赶快学起来！
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="teacher-right">
                    <div className="teacher">
                        <div className="white-border">
                            <div className="teacher-img">
                                <img src={teacherAvatar1} alt="avatar" tit="" width="100%"/>
                            </div>
                        </div>
                        <div className="nick-name">
                            音视频——李超
                        </div>
                        <p>音视频开发工程师</p>
                    </div>
                </div>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width='900px'
                    title={null}
                    wrapClassName={'web'}
                >
                    {this.state.type ?
                        <video width="900" src={this.props.commodities.commodityUrl} controls="controls" autoPlay="autoplay" ref={video => this.video = video}>
                            您的浏览器不支持 video 标签。
                        </video>
                        :
                        <div style={{position: 'relative'}}>
                            <video width="900" src={''} controls="controls" autoPlay="autoplay" ref={video => this.video = video}></video>
                            <div style={{position: 'absolute', top: '200px', left: '270px', fontSize: "18px", color: 'white'}}><Icon type="warning"/>试看已结束，请购买课程后查看完整版视频</div>
                        </div>}
                </Modal>
            </div>

        );
    }
}

