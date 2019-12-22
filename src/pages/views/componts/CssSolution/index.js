import React, { Component } from 'react'

export default class CssSolution extends Component {
    render() {
        return (
            <div>
                <h1>后台管理系统通用样式部分效果展示</h1>
                <h2 className="padding-xl text-green">1.【外内边距】父盒子类名cols-10 clearfix 此盒子类名padding-xl  text-green</h2>
                <div className="cols-8 clearfix">
                    <div className="cell border padding-sm">
                        子盒子类名cell border padding-sm
                    </div>
                    <div className="cell border padding-sm">
                        子盒子类名cell border padding-sm
                    </div>
                    <div className="cell border padding-sm">
                        子盒子类名cell border padding-sm
                    </div>
                    <div className="cell border padding-sm">
                        子盒子类名cell border padding-sm
                    </div>
                    <div className="cell border padding-sm">
                        子盒子类名cell border padding-sm
                    </div>
                </div>
                <div className="margin-lg text-sub h3">2.【栅格布局】父盒子类名cols-5 gutter-row gutter-xl 此盒子类名margin-lg  text-sub</div>
                <div className="cols-5 gutter-row gutter-xl clearfix">
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                    <div className="cell text-center">
                        子盒子类名cell text-center
                    </div>
                </div>
                <div className='margin-left-def text-yellow h4'>3.【flex布局】父盒子类名flex item-center 此盒子类名margin-left-def  text-yellow</div>
                <div className="flex item-center">
                    <div className="cell border">
                        子盒子类名border
                    </div>
                    <div className="cell border radius margin-left-sm">
                        子盒子类名border radius margin-left-sm
                    </div>
                    <div  className="cell border margin-left-lg">
                        子盒子类名cell border margin-left-lg
                    </div>
                    <div  className="cell border padding-lg margin-left-sm">
                        子盒子类名cell border padding-lg margin-left-sm
                    </div>
                </div>
                <div className="text-main padding-lg h5">4.【按钮样式】父盒子flex items-middle space-between 此盒子样式text-main padding-lg</div>
                <div className="flex items-middle space-between">
                    <div className="padding-def button-main pointer">
                        子盒子类名button-main pointer padding-def
                    </div>
                    <div className='padding-def button-green pointer'>
                        子盒子类名button-green pointer padding-def
                    </div>
                    <div className='padding-def border-red'>
                        子盒子类名border-red padding-def
                    </div>
                    <div className='padding-def border-gray'>
                        子盒子类名border-gray padding-def
                    </div>
                </div>
            </div>
        )
    }
}