import React,{Component} from 'react'
import {connect} from 'react-redux'
import './live.scss'
class Live extends Component{
    constructor(props){
        super(props);
        this.state={
           lives:[
               {org_price:28000,status:1},
               {org_price:2.8,status:1},
               {org_price:1000,status:1},
               {org_price:1438,status:1},
               {org_price:19,status:1},
               {org_price:0.9,status:1},
               {org_price:247,status:1},
               {org_price:764,status:1},
               {org_price:6.9,status:1},
               {org_price:0.1588,status:1},
           ]
        }
        this.handleSwitch=this.handleSwitch.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSwitch(e){
        let live=this.state.lives.map((v,i)=>{
             if(i==e){
                 v.status=!v.status
             }
             return v;
        })
        this.setState({
                lives:live
        })
    }
    handleChange(e,ig){
        const val=e.target.value;
        let live=this.state.lives.map((v,i)=>{
            if(i==ig){
                v.org_price=val
            }
            return v;
       })
       this.setState({
               lives:live
       })
    }
    render(){
        const {lives}=this.state;
        return(
            <div className="live">
                <h2>实时交易信息</h2>
                <table>
                    <tr>
                        <th>币种</th>
                        <th>最新价格(¥)</th>
                        <th>基准价格</th>
                        <th>实时涨幅</th>
                        <th>操作</th>
                    </tr>
                    {
                        this.props.list.slice(0,10).map((v,i)=>{
                            return <tr>
                            <td>
                                {v.name}
                            </td>
                            <td>
                                {v.current_price}
                            </td>
                            <td contentEditable={!lives[i].status} onChange={(e)=>this.handleChange(e,i)}>
                                {lives[i].org_price}
                            </td>
                            <td>
                                {((v.current_price-lives[i].org_price)/lives[i].org_price*100).toFixed(4)+'%'}
                            </td>
                            <td onClick={()=>this.handleSwitch(i)}>
                                {
                                    lives[i].status?'Edit':'Confirm'
                                }
                            </td>
                        </tr>
                        })
                    }
                </table>
            </div>
        )
    }
}
export default connect(state=>({
    list:state.data
}),{})(Live);