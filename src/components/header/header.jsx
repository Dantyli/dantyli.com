import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom'
import './header.scss';
class CommonHeader extends Component{
    constructor(props){
        super(props);
        this.state={
        
        }
    }
    render(){
        return(
            <div className="header">
                <div className="header-wrap">
                     <p className="header-items">
                         <img className="avatar" src={require("../../img/index_BTC.png")}/>
                         <Link to="/">Hi,i am Dantyli!</Link>
                     </p>
                     <p className="header-items fr">
                        <Link to="/live">Live</Link>
                        <Link to="/table">24H</Link>
                     </p>
                </div>
            </div>
        )
    }
}
export default withRouter(CommonHeader);