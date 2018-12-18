import React,{Component} from 'react'
import {connect} from 'react-redux'
import './table.scss'
class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            page:1,
            pages:[1,2,3,4,5,6,7,8,9,10]
        }
        this.changePage=this.changePage.bind(this);
    }
    componentDidMount(){
        
    }
    changePage(v){
        this.setState({
            page:v
        })
    }
    render(){
        let {curdata,page,pages}=this.state;
        return(
            <div className="table">
                <table>
                    <tr>
                        <th>编号</th>
                        <th>币种</th>
                        <th>市值(¥)</th>
                        <th>全球指数</th>
                        <th>24H成交</th>
                        <th>24H涨幅</th>
                    </tr>
                    {
                       this.props.list.slice(10*(page-1),10*page).map(v=>{
                           return <tr>
                                <td>{v.rank}</td>
                                <td>{v.name}</td>
                                <td>{v.market_value}</td>
                                <td>{v.current_price}</td>
                                <td>{v.vol}</td>
                                <td>{v.change_percent}%</td>
                           </tr>
                       })
                    }
                </table>
                <div className="pager">
                   {
                      pages.map(v=>{
                          return <p className={v==page?'active':''} onClick={()=>this.changePage(v)}>{v}</p>
                      })
                   }
                </div>
            </div>
        )
    }
}
export default connect(state=>({
    list:state.data
}),{

})(Table);