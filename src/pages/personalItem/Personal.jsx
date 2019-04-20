import React, {Component} from 'react'
import Header from '../home/Header';

import MyOrder from './MyOrder';
import defaultBannar from './defaultbannar.jpg';
import girl from './girl.png';
import Upload from './Upload.jsx'

import PersonalItem from './PersonalItem';
import {Tabs, Icon, Button} from 'antd';
import './style.less';
import {connect} from "../../models";

const TabPane = Tabs.TabPane;

export const PAGE_ROUTE = '/Personal';
@connect()

export default class Personal extends Component {
    state = {visible: false};
    render() {
        let uuid = sessionStorage.getItem('uuid');
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
                    <Button type="primary"><Icon type="heart"/>上传我的课程视频</Button>
                </div>
                <Tabs
                    defaultActiveKey="3"
                    tabPosition="left"
                    style={{margin: '40px 0 0 40px', height: '1000px'}}
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

            </div>
        );
    }
}

