import React from 'react'
import {Layout} from 'antd'
const { Header} = Layout;
const XHeader = () => {
    return (
        <>
            <Header>
            <div className="logo" />
            <h1 style={{color:'red' ,marginLeft:'420px'}}> COVID-19 World Map Results</h1>
        </Header>
        </>
    )
}

export default XHeader
