import React,{Component} from 'react'
import RouterMap from '../routes/index'
import {connect} from 'react-redux'
// 绑定actionCreator组成的对象
import {bindActionCreators} from 'redux'
// 获取所有actionCreator组成的对象
import * as Actions from '../actions/userInfo'
import {getStorage} from '../local'


class App extends Component{
    constructor(){
        super();
        this.state={
            done:false // 默认加载未完成
        }
    }
    render(){
        return (
            <div>
                {/*如果当路径为/  RouterMap  就会变为Home组件*/}
                {this.state.done?<RouterMap/>:<div>正在加载...</div>}
            </div>
        )
    }
    componentDidMount(){
        let cityName = getStorage('cityName');
        if(cityName == null){
            cityName = '北京'
        }
        this.props.userActions.update({
            cityName
        });
        this.setState({
            done:true
        });

    }
}

export default connect(
    state=>{ // mapStateToProps
        return {}
    },
    dispatch=>{ // mapDispatchToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App);