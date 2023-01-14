import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row, Col, Card, Typography } from "antd";
import { useParams } from "react-router-dom";
import uri from '../../../static/environment.js'
import GraficaCobroSemanal from "./Components/GraficaCobroSemanal";

const DetalleRuta = () => {
    const [totalCobros, setTotalCobros] = useState([])
    const { id } = useParams()
    const { Title, Text } = Typography;

    useEffect(() => {
        const getRutas = async () => {
          try{
            const { data } = await axios.get(`${uri.uri}/cobros/por-rango-fechas?idRuta=2`)
            console.log(data)
            setTotalCobros(data.response)
          }
          catch(ex){
            console.log("err",ex)
          }
        }
        getRutas()
      },[])
  

    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} md={24}>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
                            <Card bordered={false} className="criclebox h-full">
                                <GraficaCobroSemanal title={"Cobro Semanal"} data={[400, 300, 300]} labels={['lalalala', 'ksdksd', 'sdsdsd']} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
                            <Card bordered={false} className="criclebox h-full">
                            </Card>
                        </Col>
                    </Row>

                    <Row className="rowgap-vbox" gutter={[24, 0]}>

                    </Row>
                </Col>
            </Row>
            <Row gutter={[24, 0]}>
                <Col md={8} className="mb-24">

                </Col>
                <Col span={24} md={8} className="mb-24">
                </Col>

                <Col span={24} md={8} className="mb-24">
                </Col>
            </Row>
        </>
    );
}

export default DetalleRuta