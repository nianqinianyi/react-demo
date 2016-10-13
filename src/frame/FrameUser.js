import React, {Component} from 'react';
import {Popover} from 'antd';

const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
class FrameUser extends Component {
    render() {
        return (
            <Popover placement="bottomLeft" title={text} content={content} trigger="hover">
                <div className="frame-user">username</div>
            </Popover>
        );
    }
}

export default FrameUser;
