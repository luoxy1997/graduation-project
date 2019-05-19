import React, {Component} from 'react';
import {Modal, Button, Tabs, Icon, Form, Col, Rate, Row} from 'antd';
import Header from '../home/Header';
import './style.less';
import {connect} from "../../models";
import p2 from './p2.jpg';
import {ajaxHoc} from "../../commons/ajax";
import PropTypes from "prop-types";

const TabPane = Tabs.TabPane;

export const PAGE_ROUTE = '/mall';
@connect()
@Form.create()
@ajaxHoc()
export default class Mall extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    };
    state = {
        commodities: [{}], // 商品
    };
    state = {
        current: 'mail',
        userLogin: false,
        userNickName: '抹茶儿',
        visible: false,
    };

    componentWillMount() {
        this.props.ajax.get('/commodity/opera/queryCommodity?commodity=5&pageSize=5&pageNum=1')
            .then(res => {
                if (res) {
                    this.setState({commodities: res.data.list});
                }

            })
    }

    handleClass = (item) => {
        console.log(item,'item');
        this.context.router.history.push({pathname:'/classInfo',state:item})
    };

    render() {
        console.log(this.state.commodities);
        return (
            <div>
                <Header theme="dark" background="black"/>
                <div style={{width: '1200px', margin: '0 auto'}}>
                    <h2 style={{borderBottom: '1px solid #ddd', width: '100%', lineHeight: '60px', height: 60, fontWeight: '200'}}><Icon type="shop" style={{padding: '0 10px'}}/>积分商城</h2>
                    <Row>
                        {this.state.commodities && this.state.commodities.map((item, index) => {
                            return (
                                <Col span={4} style={{margin: '0 20px'}} onClick={() => this.handleClass(item)} key={index}>
                                    <div className="item-banner">
                                        <img src={`data:image/png;base64,${item.commodityImage}`} alt={12} tit='ew' width="100%" className="item-img"/>
                                        <div className="item-label">
                                            {item.commodityPerValue.map((it, index) => {
                                                    return (<label key={index}>{it}</label>)
                                                }
                                            )}

                                        </div>
                                        <div className="item-status">
                                            <label>{item.commodityCD}</label>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <label>{item.commodityName}</label>
                                    </div>
                                    <div className="item-info">
                                        <span>{item.commodityExampl}</span>
                                        <span>{item.commodityLevel}</span>
                                        <span><Icon type="user"/>{item.commodityPeople}</span>
                                        <Rate disabled defaultValue={item.commodityEvaluate}/>
                                    </div>
                                    <div className="item-info item-sales">
                                        <span>￥{item.commodityPrice}</span>
                                        <span style={{color: '#93999f'}}><s>￥{item.commodityOPrice}</s></span>
                                        <span style={{background: 'rgba(240,20,20,.09)', padding: 3}}>限时优惠</span>
                                    </div>

                                </Col>
                            )
                        })
                        }
                    </Row>
                </div>

            </div>
        );
    }
}

