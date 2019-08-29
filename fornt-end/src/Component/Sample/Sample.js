import React from 'react';
import '../../css/common.css';
import './Sample.css';


class Sample extends React.Component {
    constructor(props){
        super()
        this.state={
            stateSample:"constructor:开始第一次渲染"
        }
    }
    componentDidMount(){
        this.setState({stateSample:"componentDidMount：结束第一次渲染"})
    }
    render(){
        return (
            <div className="ccFlexColumn">
                <p>this is the Sample Component of FishStar's Project</p>
                <p>这里是游鱼星的Component模板</p>
                <p>{this.state.stateSample}</p>
                <p>当前页面：{this.props.content?this.props.content:"首页"}</p>
                <p>当前ID：{this.props.match.params.id?this.props.match.params.id:"无"}</p>
            </div>
          );
    }
}

export default Sample;
