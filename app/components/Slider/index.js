import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
import './index.less'

export default class Slider extends Component{
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    render(){
        let opts = {
            continuous: false,
            callback:(index)=>{
                this.setState({
                    index
                });
            }
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-bag"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag2"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag3"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag4"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag5"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag6"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag7"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag8"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag9"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag"></i>
                                <span>斜挎包</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-bag"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag2"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag3"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag4"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag5"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag6"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag7"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag8"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag9"></i>
                                <span>斜挎包</span>
                            </li>
                            <li>
                                <i className="iconfont icon-bag"></i>
                                <span>斜挎包</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index == 0 ? "active":""}></li>
                    <li className={this.state.index == 1 ? "active":""}></li>
                </ul>
            </div>
        )
    }
}