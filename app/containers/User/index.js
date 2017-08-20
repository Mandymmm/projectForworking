import React,{Component} from 'react'
import HeaderComponent from '../../components/HeaderComponent/index'
import UserInfo from '../../components/UserInfo/index'
import {connect} from 'react-redux'

class User extends Component{
    render(){
        return (
            <div>
                {/* 返回后会回到登录页*/}
                <HeaderComponent title="用户信息" history={this.props.history} back="/"/>
                <UserInfo userInfo={this.props.userInfo}/>
            </div>
        )
    }
}

export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(User);