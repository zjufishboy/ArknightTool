import React from 'react';
import '../../css/common.css';
import './QNavBar.css';
import {Avatar, Drawer, Icon } from 'antd';
import {Link} from 'react-router-dom';

class QNavBar extends React.Component {
    constructor(props){
        super()
        this.state={
            FunctBarVisible:false
        }
    }
    componentDidMount(){
        console.log(this.props.functlist)
    }
    onStart=()=>{
        this.setState({FunctBarVisible:true})
    }
    onClose=()=>{
        this.setState({FunctBarVisible:false})
    }
    listToDiv =(item)=>(
        <div className="ItemNav ccFlexRow" key={item.name}>
            <Link to={item.to} className="acFlexRow" onClick={this.onClose}><Icon type={item.icon} />{item.name}</Link>
        </div>
    )
    render(){
        return (
            <div>
            <div className="NavBarOutSide bcFlexRow">
                 <Drawer
                    title={null}
                    placement={"left"}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.FunctBarVisible}
                    width={150}
                    >
                    <div className="ItemsNav ccFlexColumn">
                        <div className="ItemNav ccFlexRow" style={{backgroundColor:'#5ba7d6'}}>
                            <Avatar 
                                style={{ backgroundColor: '#87d068' ,margin:'10px 0px 20px 0px'}} 
                                src="http://q1.qlogo.cn/g?b=qq&nk=1647075274&s=640" 
                                size={80}/>
                        </div>
                       {this.props.functlist?this.props.functlist.map(this.listToDiv):null}
                    </div>
                </Drawer>
                <div className="NavBarIcon ccFlexRow">
                    <Avatar 
                        style={{backgroundColor: '#ffffff' }}
                        src="http://q1.qlogo.cn/g?b=qq&nk=1647075274&s=640" 
                        onClick={this.onStart}
                    />
                </div>
                {this.props.title}
                <div className="NavBarIcon ccFlexRow">
               </div>
            </div>
            <div className="NavBarBlock">
            </div>
            </div>
          );
    }
}

export default QNavBar;
