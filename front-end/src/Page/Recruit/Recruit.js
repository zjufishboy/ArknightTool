import React from 'react';
import '../../css/common.css';
import './Recruit.css';
import { Checkbox, Divider, Row, Col, Avatar, Modal, Card } from 'antd';
import Data from '../../utils/Data'
const SelectContent =[
    {id:0,name:'种类',options:['干员寻访', '活动获得', '公开招募','尚未实装','剧情获得']},
    {id:1,name:'星级',options:['1', '2', '3','4','5','6']},
    {id:2,name:'资质',options:['新手', '资深干员', '高级资深干员']},
    {id:3,name:'性别',options:['男性干员', '女性干员']},
    {id:4,name:'位置',options:['近战位', '远程位']},
    {id:5,name:'种类',options:['先锋干员', '狙击干员', '医疗干员','术师干员','近卫干员','重装干员','辅助干员','特种干员']},
    {id:6,name:'修饰',options:['治疗', '支援', '输出','群攻','减速','生存','防护','削弱', '位移', '控场','爆发','召唤','快速复活','费用回复']},
]

class Recruit extends React.Component {
    constructor(props){
        super()
        this.state={
            optionsState:[
                [],[],[],[],[],[],[],
            ],
            ModalVisible:false,
            info:null
        }
    }
    onChange =(i,e)=>{
        let {optionsState}=this.state;
        optionsState[i]=e;
        this.setState({optionsState:optionsState})
    }
    onClick=(x)=>{
        if(x>=0)
            this.setState({info:Data[x]})
        else
            this.setState({info:null})
        this.setState({ModalVisible:true})
    }
    onCancel=()=>{
        this.setState({ModalVisible:false})
    }
    componentDidMount(){
        console.log()
    }
    codeMatch =(code)=>{
        let x1=parseInt(this.getcode(this.state.optionsState[6]),2)
        let x2=parseInt(code,2)
        return x1&x2
    }
    getcode=(list)=>{
        let Tags=['治疗', '支援', '输出','群攻','减速','生存','防护','削弱', '位移', '控场','爆发','召唤','快速复活','费用回复']
        let code=''
        for(let i=0;i<14;i++)
            if(list.indexOf(Tags[13-i])!==-1)
                code+='1'
            else
                code+='0'
        return code
    }
    judge =(item)=>{
        if(this.state.optionsState[0].length!=0&&this.state.optionsState[0].indexOf(item.type)===-1)
            return false
        if(this.state.optionsState[1].indexOf(item.level)===-1)
            return false
        if(this.state.optionsState[2].length!=0&&this.state.optionsState[2].indexOf(item.type2)===-1)
            return false
        if(this.state.optionsState[3].length!=0&&this.state.optionsState[3].indexOf(item.gender+'性干员')===-1)
            return false
        if(this.state.optionsState[4].length!=0&&this.state.optionsState[4].indexOf(item.position)===-1)
            return false
        if(this.state.optionsState[5].length!=0&&this.state.optionsState[5].indexOf(item.job+'干员')===-1)
            return false
        if(this.state.optionsState[6].length!=0&&this.codeMatch(item.code)===0)
            return false
        else 
            return true
    }
    itemToImage =(item)=>(
        this.judge(item)?(
            <Col span={6} key={item.Name} style={{height:80,textAlign:"center"}}>
                
                <Avatar shape="square" size={60} src={item.image} onClick={()=>{this.onClick(item.id)}}/>
                
                {item.Name}
            </Col>
            ):(null)
    )
    itemToSelect =(item)=>(
        <div className="SelectItem scFlexRow" key={'selectBar'+item.id}>
            <div className="SelectName scFlexRow">
                {item.name}
            </div>
            <div className="SelectContent scFlexRow">
                <Checkbox.Group 
                    options={item.options} 
                    defaultValue={this.state.optionsState[item.id]}
                    onChange={e=>{this.onChange(item.id,e)}}
                />
            </div>
        </div>
    )
    render(){
        return (
            <div className="RecruitOutSide scFlexColumn"> 
                <div style={{height:350,marginBottom:20}} className="scFlexColumn">
                    <Divider style={{color:"#fff"}} orientation={"left"}>筛选条件标签</Divider>         
                    {SelectContent.map(this.itemToSelect)}
                    <Divider style={{color:"#fff"}} orientation={"left"}>预期招募结果</Divider>
                </div>      
                <Row gutter={16} style={{width:'90%',maxHeight:'calc(100vh - 385px)',overflowY:'scroll'}}>
                    {Data.map(this.itemToImage)}
                    <Col span={6} style={{height:80,textAlign:"center"}}>
                        <Avatar shape="square" size={60} style={{backgroundColor:'#efefef',color:'#222'}}>评</Avatar>
                        {'招募分析'}
                    </Col>
                </Row>
                <Modal
                    title={null}
                    closable={false}
                    mask={true}
                    maskClosable={true}
                    visible={this.state.ModalVisible}
                    onOk={null}
                    onCancel={this.onCancel}
                    footer={null}
                    width={240}
                    bodyStyle={{padding:0}}
                    >
                      <Card
                            hoverable
                            style={{ width: 240 }}
                            bordered={false}
                            cover={<img alt="example" src={this.state.info?this.state.info.HDimage:'https://img.moegirl.org/common/3/38/Char_002_amiya_1.png'} />}
                        >
                            <Card.Meta title={this.state.info?this.state.info.Name:'Error'} description={this.state.info?this.state.info.level+'星/'+(this.state.info.position?this.state.info.position+'/':'')+this.state.info.job+'干员':'Error'}  />
                        </Card>
                </Modal>
            </div>
          );
    }
}

export default Recruit;
