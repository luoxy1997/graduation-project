import React, {Component} from 'react'
import Header from '../home/Header';

import {Divider, Modal, Icon, Card, Tabs, Collapse} from 'antd';
import goodsImg from './goodsimg.jpg'

import './style.less';

const TabPane = Tabs.TabPane;


const Panel = Collapse.Panel;

export default class Personal extends Component {
    state = {visible: false};

    render() {
        return (
            <div className="right-container">
                <div className="right-title">
                    <h2>我的订单</h2>
                </div>
                <div className="myOrder">
                    <ul className="myOrder-list">
                        <li>
                            <p className="myOrder-number">
                                <Icon type="bars" style={{fontSize: '18px', paddingTop: '9px', paddingRight: '15px',color:'rgb(221,52,21)'}}/>
                                订单编号：1904082152517301
                            </p>
                            <div className="myOrder-course">
                                <dl className="course-del">
                                    <dd className="clearfix">
                                        <a>
                                            <img src={goodsImg} alt="" tit=""/>
                                        </a>
                                        <div className="del-box">
                                            <a>
                                                <p className="course-name">BAT资深工程师由浅入深分析Tp5和Tp6底层源码</p>
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
                                        <div className="type-price" style={{color: '#f01414',fontSize:'18px'}}> ¥398.00</div>
                                    </div>
                                </div>
                                <div className="course-action">
                                    <a className="pay-now">
                                        删除订单记录
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className="myOrder-number">
                                <Icon type="bars" style={{fontSize: '16px', paddingTop: '9px', paddingRight: '15px'}}/>
                                订单编号：1904082152517301
                            </p>
                            <div className="myOrder-course">
                                <dl className="course-del">
                                    <dd className="clearfix">
                                        <a>
                                            <img src={goodsImg} alt="" tit=""/>
                                        </a>
                                        <div className="del-box">
                                            <a>
                                                <p className="course-name">BAT资深工程师由浅入深分析Tp5和Tp6底层源码</p>
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
                                        <div className="type-price" style={{color: '#f01414',fontSize:'18px'}}> ¥398.00</div>
                                    </div>
                                </div>
                                <div className="course-action">
                                    <a className="pay-now">
                                        删除订单记录
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className="myOrder-number">
                                <Icon type="bars" style={{fontSize: '16px', paddingTop: '9px', paddingRight: '15px'}}/>
                                订单编号：1904082152517301
                            </p>
                            <div className="myOrder-course">
                                <dl className="course-del">
                                    <dd className="clearfix">
                                        <a>
                                            <img src={goodsImg} alt="" tit=""/>
                                        </a>
                                        <div className="del-box">
                                            <a>
                                                <p className="course-name">BAT资深工程师由浅入深分析Tp5和Tp6底层源码</p>
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
                                        <div className="type-price" style={{color: '#f01414',fontSize:'18px'}}> ¥398.00</div>
                                    </div>
                                </div>
                                <div className="course-action">
                                    <a className="pay-now">
                                        删除订单记录
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

