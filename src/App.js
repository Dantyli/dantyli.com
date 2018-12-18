import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Win from './components/window/window'
import Home from './components/home/home'
// import About from './components/about/about'
import Currency from './components/table/table'
import {Route,Switch,HashRouter,withRouter} from 'react-router-dom';
import ajax from './common/ajax'
import {connect} from 'react-redux'
import {fetchlist} from './store/action'
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
      ajax({url:'/getCoinList'}).then(res=>{
         let result=JSON.parse(res)
           that.props.fetchlist(result.data)
      })
      setInterval(()=>{
        ajax({url:'/getCoinList'}).then(res=>{
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
