import React, {Component} from 'react';
import './home.css';
import Rating from '@material-ui/core/Rating';
import Banner from "./image/Banner.svg";
import 'antd/dist/antd.css';
import {Col, Row} from 'antd';

const endpoint_to_get = 'https://corebiz-test.herokuapp.com/api/v1/products'
export default class Home extends Component{
    constructor() {

        super();
        this.state = {
            produtos:[],
            installments:[]

    }}

    converteMoeda =(valor)=>{
        let numeroConvertidoParaFloat =
            Number((Math.round(valor) / 100).toFixed(2));
        return numeroConvertidoParaFloat
            .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }
    validaPreco = (valor) =>{
        if(valor != null){
            return <h3 className={'valorlistPrice'}>De R${this.converteMoeda(valor)}</h3>
        } else {
            return  <h3 className={'valorlistPrice'}><br/></h3>
        }
    }

    render() {

        fetch(endpoint_to_get).then(resposta => {
            return resposta.json().then(json =>{
                this.setState({produtos: json})
            });
        })


        return(<div>
            <Row gutter={{xs: 8, sm: 32}}>
                <Col className="gutter-row" sm={24}>
                    <img className={'Banner'} src={Banner}  alt={'Banner'}/>
                </Col>
            </Row>

            <Row gutter={{xs: 8, sm: 32}}>
                <Col className="gutter-row" sm={4}/>
                <Col className="gutter-row" sm={6}>
                    <h2 className={'vendido'}><b>Mais Vendidos</b></h2>
                </Col>
                <Col className="gutter-row" sm={14}/>
            </Row>

            <Row gutter={{xs: 8, sm: 32}}>
                <Col className="gutter-row"sm={2}/>
                <Col className="gutter-row" sm={20}>
                    <div className={'divImageProduto'}>



                        {(this.state.produtos.length > 0 ) ?
                            this.state.produtos.map(item => {

                                return (
                                    <div >
                                        <img className={'imageProduto'} src={item.imageUrl} alt={'img'} />
                                        <div>
                                            <h3 className={'nomeProduto'}>{item.productName}</h3>
                                            <Rating  className={'star'} defaultValue={item.stars}
                                                     precision={0.5} readOnly />
                                            {this.validaPreco(item.listPrice)}
                                            <h3 className={'valorPrice'}>Por R${this.converteMoeda(item.price)}</h3>

                                            <button className={'botaoComprar'}>COMPRAR</button>
                                        </div>
                                    </div>
                                )
                            }) : undefined}


                    </div>
                </Col>
                <Col className="gutter-row" sm={2}/>

            </Row>

            <div className={'divEmail'}>
                <Row gutter={{xs: 8, sm: 32}}>
                    <Col className="gutter-row"sm={4}/>
                    <Col className="gutter-row"sm={16}>
                        <h1>Participe de nossas news com promoções e novidades!</h1>
                    </Col>
                    <Col className="gutter-row"sm={4}/>
                </Row>

                <Row gutter={{xs: 8, sm: 32}}>
                    <Col className="gutter-row"sm={6}/>
                    <Col className="gutter-row"sm={6}>
                        <input className={'inputNome'} type="text" id="nome" placeholder={'Digite seu nome'} />
                    </Col>
                    <Col className="gutter-row"sm={6}>
                        <input className={'inputEmail'} type="email" id="email" placeholder={'Digite seu email'} />
                    </Col>
                    <Col className="gutter-row"sm={4}>
                        <button className={'cadastro'}>EU QUERO!</button>
                    </Col>
                    <Col className="gutter-row"sm={2}/>
                </Row>
            </div>

        </div>)
    }
}