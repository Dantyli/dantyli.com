import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Win from './components/window/window'
import Home from './components/home/home'
import Live from './components/live/live'
// import About from './components/about/about'
import Currency from './components/table/table'
import {Route,Switch,HashRouter,withRouter} from 'react-router-dom';
import ajax from './common/ajax'
import {connect} from 'react-redux'
import {fetchlist} from './store/action'
console.log('%c 联系我: leece2012@163.com'," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:4em")
class App extends Component{
    constructor(props){
      super(props)
      this.state={
        model:true
      }
      this.handleCloseModel=this.handleCloseModel.bind(this)
    }
    componentWillMount(){
      let that=this
      ajax({url:'/api/getCoinList'}).then(res=>{
         let result=JSON.parse(res)
           that.props.fetchlist(result.data)
      })
      setInterval(()=>{
        ajax({url:'/api/getCoinList'}).then(res=>{
          let result=JSON.parse(res)
            that.props.fetchlist(result.data)
       })
      },6000)
    }
    handleCloseModel(){
      this.setState({
        model:false
      })
    }
     render(){
       let {model}=this.state
       return(
         <div>
           <Header />
           <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/table" exact component={Currency} />
             <Route path="/live" exact component={Live} />
           </Switch>
           {model&&<Win close={this.handleCloseModel} />}
           <Footer />
         </div>
       )
     }
}

export default withRouter(connect(state=>({

}),{
  fetchlist
})(App));
