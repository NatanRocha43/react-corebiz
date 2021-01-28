import React, {Component} from 'react';
import {UserOutlined, ShoppingCartOutlined, SearchOutlined} from '@ant-design/icons';
import './Header.css';
import 'antd/dist/antd.css';
import {Row, Col, Input} from 'antd';
import logo from './image/logo.svg';


export default class Header extends Component{

    render() {
        const suffix = (<SearchOutlined className={'iconSearch'}/>);

        return(
                <Row gutter={{xs: 8, sm: 32}}>
                    <Col className="gutter-row" sm={2}/>
                    <Col className="gutter-row" sm={4}>
                        <img className={'logotipo'} src={logo}  alt={'logoTipo'}/>
                    </Col>
                    <Col className="gutter-row" sm={8}>
                        <Input  placeholder="O que está procurando?" suffix={suffix} bordered={false}/>
                    </Col>
                    <Col className="gutter-row" sm={4}>
                        <button className={'buttonHeader'}><UserOutlined /> minha conta</button>
                    </Col>
                    <Col id={'iconPurchase'} className="gutter-row" sm={2}>
                        <ShoppingCartOutlined /><span className={'numberBuy'}>1</span>
                    </Col>
                    <Col className="gutter-row" sm={4}/>
                </Row>

            )

    }
}
