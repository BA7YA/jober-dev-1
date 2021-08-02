import { Row } from 'antd';
import Col from 'antd/lib/grid/col';
import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="header-container">
            <Row >
                <Col span={18} >JOBER</Col>
                <Col span={3} style={{display: 'flex', justifyContent: 'right'}}>
                    <div style={{width: 100}}>SEARCH</div>
                </Col>
                <Col span={3} style={{textAlign: 'right'}}>
                    USER
                </Col>
            </Row>
           
            
        </div>
    )
}

export default Header
