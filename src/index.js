import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Row, Col} from 'antd';

import './index.css';
import 'antd/dist/antd.css';

// import logo from './logo.svg';
// import './App.css';

// import {FrameLogo,FrameUser,FrameContent,FrameFooter} from './common/Frame';
// import {FrameMenu,FrameSubMenu} from './common/EbsMenu';
import FrameLogo from './frame/FrameLogo';
import FrameMenu from './frame/FrameMenu';
import FrameUser from './frame/FrameUser';

import FrameLeftMenu from './frame/FrameLeftMenu';

import FrameContent from './frame/FrameContent';
import FrameFooter from './frame/FrameFooter';

ReactDOM.render(
    <div className="App">
    <Row>
        <Col span={4}>
            <FrameLogo/>
        </Col>
        <Col span={17}>
            <FrameMenu/>
        </Col>
        <Col span={3}>
            <FrameUser/>
        </Col>
    </Row>
    <Row>
        <Col span={4}>
            <FrameLeftMenu/>
        </Col>
        <Col span={20}>
            <FrameContent/>
            <FrameFooter/>
        </Col>
    </Row>
</div>, document.getElementById('root'));
