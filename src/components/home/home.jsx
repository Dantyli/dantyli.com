import React,{Component} from 'react'
import './home.scss'
class Home extends Component{
    render(){
        return(
            <div className="home">
                <p>
                    <h2>Internet</h2>
                    I am a front-end developer
                </p>
                <p>
                    <h2>Block Chain</h2>
                    Focus on application scenarios of block chain technology.
                    Decentralized supporters
                </p>
                <p>
                    <h2>Digital Currency</h2>
                    BTC can buy the most expensive pizza!
                </p>
                <p>
                    <h2>Cooperation</h2>
                    <a href="mailto:dantyli93@gmail.com">dantyli93@gmail.com</a>
                    <h5>China</h5>
                    <a href="leece2012@163.com">leece2012@163.com</a>
                </p>
            </div>
        )
    }
}
export default Home;