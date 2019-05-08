import React, {Component} from 'react';
import './style.less';
import PropTypes from "prop-types";
import classBg from './classTitleBg.jpg';
import Login from '../home/Login';
import {ajaxHoc} from "../../commons/ajax";


@ajaxHoc()
export default class CourseInfoTop extends Component {
    state = {
        visible: false
    }
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    };

    handleBuy = () => {
        if (window.sessionStorage.getItem("user")) {
            this.context.router.history.push({pathname: '/confirmGoods', state: this.props.commodities});
        } else {
            this.setState({visible: true})
        }
    };
    handleAddCar = () => {
        console.log(this.props.commodities);
        const {uuid, commodityRemark, commodityPrice, commodityLevel, commodityPeople, commodityEvaluate} = this.props.commodities;
        const params = {
            userId: JSON.parse(window.sessionStorage.getItem("user")).uuid,
            commodityId:uuid
        }
        this.props.ajax.post('/customer/cart/addCart',params)
            .then(() => {

            })
    }

    render() {
        const {commodityName, commodityRemark, commodityPrice, commodityLevel, commodityPeople, commodityEvaluate} = this.props.commodities;
        return (
            <div className="course-infos-top" style={{background: `url(${classBg})`}}>
                <div className="info-wrap">
                    <div className="title-box">
                        <h1>{commodityName}</h1>
                        <h2>{commodityRemark}</h2>
                    </div>
                </div>
                <div className="fixed-wrap">
                    <div className="fixed-content">
                        <div className="price">
                            <div className="ori-price">
                                ￥{commodityPrice}
                            </div>
                            <div class="activity">
                                限时活动
                            </div>
                        </div>
                        <div className="info-bar">
                            <span>难度</span>
                            <span className="details">{commodityLevel}</span>
                            <i>.</i>
                            <span>时长</span>
                            <span className="details">16小时16分钟</span>
                            <i>.</i>
                            <span>学习人数</span>
                            <span className="details">{commodityPeople}</span>
                            <i>.</i>
                            <span>综合评分</span>
                            <span className="details">{commodityEvaluate * 4.4}分</span>
                        </div>
                        <div className="btns">
                            <a className="red-btn" onClick={this.handleBuy}>立即购买</a>
                            <a className="add-chart" onClick={this.handleAddCar}>加购物车</a>
                        </div>
                    </div>


                </div>
                <Login
                    visible={this.state.visible}
                    cancel={() => {
                        this.setState({visible: false})
                    }}
                />
            </div>
        );
    }
}

