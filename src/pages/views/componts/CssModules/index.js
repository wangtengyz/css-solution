import React, { Component } from 'react'
import Hello from './index.module.less'
// css 模块化
export default class ManageIndex extends Component {
    render() {
        return (
            <div>
                <div className={Hello.base}>base</div>
                <div className={Hello.normal}>normal</div>
                <div className={Hello.disabled}>disabled</div>
                <div className='test1'>test1</div>
            </div>
        )
    }
}
