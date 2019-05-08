import React, {Component} from 'react';
import goodsImg from './img/goodsimg.jpg';
import pay_s from './img/pay_s.png';
import Header from '../home/Header';
import {ajaxHoc} from "../../commons/ajax";

import {Modal, Button, Icon, Table, Collapse} from 'antd';


import './style.less';

const Panel = Collapse.Panel;
export const PAGE_ROUTE = '/payCarts';
@ajaxHoc()

export default class VideoItem extends Component {
    state = {visible: false};
    componentDidMount() {
        const userId = JSON.parse(window.sessionStorage.getItem("user")).uuid;
        this.props.ajax.get(`/customer/cart/queryCart?userId=${userId}&pageSize=10&pageNum=1`)
            .then((res) => {
                console.log(res);
                this.setState({
                    orders: res.data.list
                })
            })
    }
    handlePay = () => {
        this.setState({visible: true});

    };
    handleCancel = () => {
        this.setState({visible: false});
    };
    addBorder = (e) => {
        this.wechat.style.border = '2px solid #f3f5f7';
        this.alipay.style.border = '2px solid #f3f5f7';
        e.target.style.border = '2px solid red';
    };

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        const columns = [{
            title: '课程名称',
            dataIndex: 'name',
            render: text => <div>
                <a>
                    <img src={goodsImg} alt="" tit=""/>
                </a>
                <a style={{paddingLeft: '20px', width: '400px', display: 'inline-block', fontSize: '16px'}}>【实战课程】WebRTC实时互动直播技术入门与实战 5G时代必备技能</a>
            </div>,
            width: '60%'
        }, {
            title: '金额',
            dataIndex: 'age',
        }, {
            title: '操作',
            render: () =>
                <Icon type="close" style={{fontSize: '20px'}}/>
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
        },];


        return (
            <div>
                <Header theme="dark" background="black"/>
                <div className="confirm-wrap">
                    <div className="wrap">
                        <div className="chart-header pay-chart-header">
                            <div className="chart-title">
                                <p>我的购物车</p>
                            </div>
                        </div>
                        <div className="cart-body">
                            <div style={{paddingTop: '40px'}}>
                                {data.length ?
                                    <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
                                    :
                                    <div style={{lineHeight: '350px', fontSize: '30px', width: '320px', fontWeight: '300', textAlign: 'center', margin: '0 auto'}}><Icon type="shopping-cart" style={{paddingRight:'20px',fontSize:'40px',fontWeight: '300',}}/>购物车空空如也哦</div>}


                            </div>
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
                            </div>
                            <div className="pay-account-box">
                                <div className="pay-account">
                                    购买账号：抹茶味的胡萝卜
                                </div>
                            </div>
                            <a className="buy-btn" onClick={this.handlePay}>提交订单</a>

                        </div>
                    </div>
                </div>
                <Modal
                    visible={this.state.visible}
                    title="请选择付款方式"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="取消" onClick={this.handleCancel}>取消</Button>,
                        <Button key="确认" type="primary" onClick={this.handleOk}>
                            确认付款
                        </Button>,
                    ]}
                >

                    <div className="pay-list" style={{width: '420px', height: '100px', margin:'0 auto'}}>
                        <a className="pay-way" onClick={this.addBorder} ref={wechat => this.wechat = wechat} style={{border:'2px solid red'}}>
                        </a>
                        <a className="pay-way alipay" onClick={this.addBorder}  ref={alipay => this.alipay = alipay}></a>
                    </div>


                </Modal>
            </div>
        );
    }
}

