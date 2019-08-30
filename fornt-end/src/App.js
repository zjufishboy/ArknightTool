import React from 'react';
import './css/common.css';
import './App.css';
import Sample from './Component/Sample/Sample';
import Intro from './Page/Intro/Intro'
import { Icon } from 'antd';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import QNavBar from './Component/NavBar/QNavBar';
import Recruit from './Page/Recruit/Recruit';

const functlist=[
  {name:"首页封面",to:"/",icon:'home'},
  {name:"公开招募",to:"/Recruit",icon:'user-add'},
  {name:"关于作者",to:"/Me",icon:'user'},
]

function App() {
  
  return (
    <div className="ccFlexColumn">
        <Router >
          <QNavBar title={"ArkNight"} functlist={functlist}/>
          <Route exact path="/" component={(routeProps)=><Intro {...routeProps} />}/>
          <Route exact path="/Recruit" component={(routeProps)=><Recruit {...routeProps} content={"测试"}/>} />
          <Route exact path="/funct" component={(routeProps)=><Sample {...routeProps} content={"测试"}/>} />
        </Router>
    </div>
  );
}

export default App;
