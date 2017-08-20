import React,{Component} from 'react'
import HeaderComponent from '../../components/HeaderComponent/index'
import LoginComponent from '../../components/LoginComponent/index'
import {connect} from 'react-redux'
import * as Actions from '../../actions/userInfo'
import {bindActionCreators} from 'redux'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            login:false // 默认未登录过，不显示登录组件
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }

    // 登录，将用户名存入redux
    login(username){
        let info = this.props.userInfo;
        info.username = username;
        this.props.userActions.update(info);// 更新redux中的状态
        this.props.history.push('/user'); // 登录成功，跳转到用户页面
    }

    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){ // 检查state.userInfo中是否有username属性
        if(this.props.userInfo.username){
            return this.props.history.push('/user');
        }
        this.setState({
            login:true // 显示登录组件
        });
    }
}

export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch => {
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login);