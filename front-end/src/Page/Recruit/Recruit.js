import React from 'react';
import '../../css/common.css';
import './Recruit.css';
import { Checkbox, Divider, Row, Col, Avatar } from 'antd';
import Data from '../../utils/Data'
const SelectContent =[
    {name:'星级',options:['1', '2', '3','4','5','6']},
    {name:'资质',options:['新手', '资深干员', '高级资深干员']},
    {name:'性别',options:['男性干员', '女性干员']},
    {name:'种类',options:['先锋干员', '狙击干员', '医疗干员','术师干员','近卫干员','重装干员','辅助干员','特种干员']},
    {name:'修饰',options:['治疗', '支援', '输出','群攻','减速','生存','防护','削弱', '位移', '控场','爆发','召唤','快速复活','费用回复']},
]

class Recruit extends React.Component {
    constructor(props){
        super()
        this.state={
            stateRecruit:"constructor:开始第一次渲染"
        }
    }
    componentDidMount(){
        
    }
    judge =(item)=>{
        if(true)
            return true
        else
            return false
    }
    itemToImage =(item)=>(
        this.judge(item)?(
            <Col span={6} key={item.Name} style={{height:80}}>
                <Avatar shape="square" size={60} src={item.image} />
                {item.Name}
            </Col>
            ):(null)
    )
    itemToSelect =(item)=>(
        <div className="SelectItem scFlexRow" key={item.name}>
            <div className="SelectName scFlexRow">
                {item.name}
            </div>
            <div className="SelectContent scFlexRow">
                <Checkbox.Group options={item.options} defaultValue={[]}/>
            </div>
        </div>
    )
    render(){
        return (
            <div className="RecruitOutSide scFlexColumn"> 
                <div style={{height:300,marginBottom:20}} className="scFlexColumn">
                    <Divider style={{color:"#fff"}} orientation={"left"}>招募条件标签</Divider>         
                    {SelectContent.map(this.itemToSelect)}
                    <Divider style={{color:"#fff"}} orientation={"left"}>预期招募结果</Divider>
                </div>      
                <Row gutter={16} style={{width:'90%',maxHeight:'calc(100vh - 385px)',overflowY:'scroll'}}>
                    {Data.map(this.itemToImage)}
                </Row>
            </div>
          );
    }
}

export default Recruit;
