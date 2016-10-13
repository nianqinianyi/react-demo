import React, {Component} from 'react';
import {Breadcrumb} from 'antd';

class FrameContent extends Component {
    render() {
        return (
            <div className="frame-content">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default FrameContent;
