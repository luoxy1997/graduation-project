import React, {Component} from 'react';
import goodsImg from './img/goodsimg.jpg';
import pay_s from './img/pay_s.png';
import Header from '../home/Header';
import {ajaxHoc} from "../../commons/ajax";
import QRCode from 'qrcode.react';

import {Divider, Modal, Button, Card, Icon, Collapse} from 'antd';


import './style.less';
import {Menu} from "antd/lib/menu";

const Panel = Collapse.Panel;

export const PAGE_ROUTE = '/confirmGoods';
@ajaxHoc()
export default class VideoItem extends Component {
    state = {
        visible: false,
        type: null,
        url: '',
    };
    handlePay = () => {
        this.setState({visible: true});

    };
    handleCancel = () => {
        this.setState({visible: false});
    };
    addBorder = (type) => {
        console.log(type);
        this.wechat.style.border = '2px solid #f3f5f7';
        this.alipay.style.border = '2px solid #f3f5f7';
        this.setState({type});
    };
    handleOk = () => {
        const {commodityName, commodityPrice, uuid} = this.props.location.state;
        const params = {
            userId: window.sessionStorage.getItem("uuid"),
            orderType: this.state.type,
            orderPrice: 0.01,
            orderName: commodityName,
            commodityId: uuid,
            extension: 'test',
            redirectUrl: '1231'
        };
        this.props.ajax.post('/customer/orders/pay', params)
            .then(res => {
                this.setState({url: res.data})
            })


    };


    render() {
        return (
            <div>
                <Header theme="dark" background='black'/>
                <div className="confirm-wrap">
                    <div className="wrap">
                        <div className="chart-header">
                            <div className="chart-title">
                                <p>确认订单</p>
                            </div>
                        </div>
                        <div className="cart-body">
                            <div className="title-box">
                                <p className="goods-info-title">
                                    商品信息
                                </p>
                                <a>
                                    我有疑问，需要反馈？
                                </a>
                            </div>
                            <div className="detail-box">
                                <div className="item-cart">
                                    <ul>
                                        <li className="item-cart">
                                            <div className="item-img">
                                                <img src={goodsImg} alt="" tit=""/>

                                            </div>
                                            <div className="text-info-box">
                                                <p>WebRTC实时互动直播技术入门与实战 5G时代必备技能</p>
                                            </div>
                                            <div className="info-price">
                                                <em>￥</em>
                                                <span>255.00</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Divider>请仔细确认订单信息</Divider>
                            <Collapse bordered={false}>
                                <Panel header="优惠活动" key="1">
                                    <p style={{paddingLeft: 24}}>
                                        A dog is a type of domesticated animal.
                                        Known for its loyalty and faithfulness,
                                        it can be found as a welcome guest in many households across the world.
                                    </p>
                                </Panel>
                            </Collapse>
                            <div className="pay-box">
                                <div className="goods-total-price-box">
                                    <div className="price-num">
                                        <em>￥</em>
                                        <span>255.00</span>
                                    </div>
                                    <div className="price-text">
                                        共
                                        <span>1</span>
                                        件商品，商品总金额
                                    </div>
                                </div>
                                <div className="goods-total-price-box">
                                    <div className="price-num">
                                        <em>-￥</em>
                                        <span>55.00</span>
                                    </div>
                                    <div className="price-text">
                                        折扣优惠
                                    </div>
                                </div>
                                <div className="goods-total-price-box">
                                    <div className="price-num price">
                                        <em>￥</em>
                                        <span>255.00</span>
                                    </div>
                                    <div className="price-text">
                                        应付
                                    </div>
                                </div>
                            </div>
                            <div className="pay-account-box">
                                <div className="pay-account">
                                    购买账号：抹茶味的胡萝卜
                                </div>
                            </div>
                            <a className="buy-btn" onClick={this.handlePay}>提交订单</a>
                        </div>
                        <Modal
                            visible={this.state.visible}
                            title="请选择付款方式"
                            onCancel={this.handleCancel}
                            footer={[
                                <Button key="取消" onClick={this.handleCancel}>取消</Button>,
                                <Button key="确认" type="primary" onClick={this.handleOk}>
                                    确认付款
                                </Button>,
                            ]}
                        >

                            <div className="pay-list" style={{width: '420px', height: '100px', margin: '0 auto'}}>
                                <a className="pay-way" onClick={() => this.addBorder('wechat')} ref={wechat => this.wechat = wechat} style={{border: '2px solid red'}}>
                                </a>
                                <a className="pay-way alipay" onClick={() => this.addBorder('alipay')} ref={alipay => this.alipay = alipay}></a>
                            </div>
                            {this.state.url === '' ? null :<QRCode value={this.state.url}/>}


                        </Modal>

                    </div>
                </div>
            </div>
        );
    }
}

