import React, {Component} from 'react'
import Header from '../home/Header';
import {ajaxHoc} from "../../commons/ajax";

import {Divider, Modal, Icon, Card, Tabs, Collapse} from 'antd';
import goodsImg from './goodsimg.jpg'

import './style.less';

const TabPane = Tabs.TabPane;


const Panel = Collapse.Panel;
@ajaxHoc()
export default class Personal extends Component {
    state = {
        visible: false,
        orders: [],
    };

    componentDidMount() {
        const userId = JSON.parse(window.sessionStorage.getItem("user")).uuid;
        this.props.ajax.get(`/customer/order/queryOrderInfoByUserId?userId=${userId}&pageSize=10&pageNum=1`)
            .then((res) => {
                this.setState({
                    orders: res.data.list
                })
            })
    }

    render() {
        return (
            <div className="right-container">
                <div className="right-title">
                    <h2>我的订单</h2>
                </div>
                <div className="myOrder">
                    <ul className="myOrder-list">
                        {this.state.orders.map(item => {
                            return <li>
                                <p className="myOrder-number">
                                    <Icon type="bars" style={{fontSize: '18px', paddingTop: '9px', paddingRight: '15px', color: 'rgb(221,52,21)'}}/>
                                    订单编号：{item.orderId}
                                </p>
                                <div className="myOrder-course">
                                    <dl className="course-del">
                                        <dd className="clearfix">
                                            <a>
                                                <img src={goodsImg} alt="" tit=""/>
                                            </a>
                                            <div className="del-box">
                                                <a>
                                                    <p className="course-name">{item.commodityName}</p>
                                                </a>
                                                <p className="price-btn-box"></p>
                                            </div>

                                        </dd>
                                    </dl>
                                    <div className="course-money">
                                        <div className="type-box">
                                            <p className="type-text">原价</p>
                                            <div className="type-price"><s> ¥398.00</s></div>
                                        </div>
                                        <div className="type-box">
                                            <p className="type-text">折扣</p>
                                            <div className="type-price"> ¥398.00</div>
                                        </div>
                                        <div className="type-box">
                                            <p className="type-text">实付</p>
                                            <div className="type-price" style={{color: '#f01414', fontSize: '18px'}}> ¥{item.commodityPrice}</div>
                                        </div>
                                    </div>
                                    <div className="course-action">
                                        <a className="pay-now">
                                            删除订单记录
                                        </a>
                                    </div>
                                </div>
                            </li>
                        })}


                    </ul>
                </div>
            </div>
        );
    }
}

