import React, {Component} from 'react';
import './footer.css';
import 'antd/dist/antd.css';
import {Col, Row} from 'antd';



export default class Footer extends Component{
    render() {
        return(
            <div style={{background:'black'}}>
                <Row gutter={{xs: 8, sm: 32}}>
                    <Col className="gutter-row"sm={4}/>
                    <Col className="gutter-row"sm={8}>
                        <h3 className={'Localizacao'}>Localização</h3>
                        <p className={'Localizacao'}>
                            Avenida Andrômeda, 2000. bloco 6 e 8 <br/>
                            Alphavile SP<br/>
                            brasil@corebiz.ag<br/>
                            +55 11 3090 1039
                        </p>

                    </Col>
                    <Col className="gutter-row"sm={12}/>
                </Row>
            </div>
        )
    }
}



