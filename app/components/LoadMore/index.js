import React,{Component} from 'react'
import './index.less'

export default class LoadMore extends Component{
    render(){
        return (
            <div className="has-more">
                {this.props.hasMore ?
                    <div ref="more" onClick={this.loadMore}>加载更多...</div>
                    :
                    <div>我是有底线的~</div> }
            </div>
        )
    }
    componentDidMount(){
        // 绑定滚动事件
        this.fn = ()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                if(this.props.isLoading){
                    return;
                }
                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;// getBoundingClientRect获得当前元素距离可视窗口的上下左右距离
                if(top<screen){
                    this.props.loadMore();
                }
            },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        // 移除滚动事件
        window.removeEventListener('scroll',this.fn);
    }
    loadMore(){
        if(this.props.isLoading){
            return;
        }
        this.props.loadMore();
    }
}