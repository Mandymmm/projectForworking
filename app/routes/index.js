import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from '../containers/Home'
import Login from '../containers/Login'
import User from '../containers/User'

export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact={true} component={Home}/>
                        <Route path='/login/:route?' component={Login}/>
                        <Route path='/user' component={User}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}