import React,{Component} from 'react'
import {connect} from 'react-redux';
import './window.scss';
class Win extends Component{
    constructor(props){
        super(props);
        this.state={
             moveX:0,
             moveY:0,
             scale:1,
             topList:[]
        }
        this.handleScale=this.handleScale.bind(this);
    }
    handleScale(e){
        this.setState({
            scale:e
        })
    }
    componentDidMount(){
        let dragobj=document.querySelector('.win');
        const that=this;
        let startX,startY,x=0,y=0,moveX,moveY,topList=[];
        dragobj.addEventListener('mousedown',(e)=>{
              startX=e.clientX;
              startY=e.clientY;
              document.onmousemove=(e)=>{
                moveX=e.clientX-startX+x;
                moveY=e.clientY-startY+y;
               that.setState({
                   moveX:moveX,
                   moveY:moveY
               })
           }
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
                x=moveX;
                y=moveY;
            }
        })
            
       setTimeout(()=>{
            topList=[];
            for(let i=0;i<4;i++){
                topList.push(that.props.list[i])
            }
            that.setState({
                topList:topList
            })
       },3000)
    }

    render(){
        let {moveX,moveY,scale,topList}=this.state;
        return(
            <div className="win" style={{transform:`translate(${moveX}px,${moveY}px)scale(${scale})`}}>
                <p className="toolbar"><span title="关闭" onClick={this.props.close}></span><span title="缩小" onClick={()=>this.handleScale(0.3)}></span><span title="放大" onClick={()=>this.handleScale(1.5)}></span><i>Draggable</i></p>
                <ul>
                    {topList.length>0?
                        topList.map(v=>{
                           return  <li><span>{v.name}</span><span>¥{v.current_price}</span><span>{v.change_percent}%</span></li>
                        })
                        :
                        <div>
                            <h1>Loading...</h1>
                        </div>
                    }
                </ul>
                <p className="source">Data Source：<a href="https://feixiaohao.com">feixiaohao.com</a></p>
            </div>
        )
    }
}
export default connect(state=>({
    list:state.data
}),{})(Win);