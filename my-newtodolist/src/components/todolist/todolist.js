import React, { PureComponent } from 'react'
import { Progress } from 'antd';
export default class todolist extends PureComponent {
    render() {
        return (
            <div>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
          </div>
         
        )
    }
}
