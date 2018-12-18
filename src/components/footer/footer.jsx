import React,{Component} from 'react';
import './footer.scss'
class CommonFooter extends Component{
    render(){
        return(
            <div className="footer">
                 Powered by Dantyli
                 <a href="mailto:leece2012@163.com"><img className="icon" src={require("./emal.png")} /></a>
                 <a href="https://github.com/dantyli"><img className="icon" src={require("./github.png")} /></a>
            </div>
        )
    }
}
export default CommonFooter;