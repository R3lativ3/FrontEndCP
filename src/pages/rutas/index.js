import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Upload,
    message,
    Progress,
    Button,
    Avatar,
    Typography,
  } from "antd";
  
const { Title } = Typography;

function Index(){
    const [rutas, setRutas] = useState([])
    const [loading, setLoading] = useState(true)

    const columns = [
        {
          title: "RUTA",
          dataIndex: "ruta",
          key: "ruta",
          width: "32%",
        },
        {
          title: "COBRADOR",
          dataIndex: "cobrador",
          key: "cobrador",
        },
        {
          title: "MUNICIPIO",
          dataIndex: "municipio",
          key: "municipio",
        },
        {
          title: "CLIENTES",
          key: "clientes",
          dataIndex: "clientes",
        },
        {
          title: "CAPITAL",
          key: "capital",
          dataIndex: "capital",
        },
        {
          title: "CAPITAL GANANCIA",
          key: "capitalGanancia",
          dataIndex: "capitalGanancia",
        },
        {
          title: "COBRO DIARIO",
          key: "cobroDiario",
          dataIndex: "cobroDiario",
        },
    ];

    function l(x){
        let arr = []
        x.map(x =>  {
            arr.push({
                key: x.id.toString(),
                ruta: (
                  <>
                      <div className="avatar-info">
                        <Title level={5}>{x.nombreRuta}</Title>
                        <p>michael@mail.com</p>
                      </div>
                  </>
                ),
                cobrador: (
                  <>
                    <div className="author-info">
                      <Title level={5}>Manager</Title>
                      <p>Organization</p>
                    </div>
                  </>
                ),
                municipio: (
                  <>
                    <Button type="primary" className="tag-primary">
                      ONLINE
                    </Button>
                  </>
                ),
                capital: (
                  <>
                    <div className="ant-employed">
                      <span>23/04/18</span>
                      <a href="#pablo">Edit</a>
                    </div>
                  </>
                )
            })
        })
        console.log(arr)
        return arr
    }


    useEffect(async () => {
        const { data } = await axios.get('http://localhost:8000/api/rutas')
        setRutas(data)
        setLoading(false)
    },[])

    return <div className="container">
        { loading && <p>Cargando...</p> }
        {
            rutas.length > 0 ? (
                <div className="tabled">
                    <Row gutter={[24, 0]}>
                        <Col xs="24" xl={24}>
                            <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="RUTAS"
                            extra={
                                <>
                                <Radio.Group defaultValue="a">
                                    <Radio.Button value="a">CREAR</Radio.Button>
                                </Radio.Group>
                                </>
                            }
                            >
                                <div className="table-responsive">
                                    <Table
                                    columns={columns}
                                    dataSource={l(rutas)}
                                    pagination={false}
                                    className="ant-border-space"
                                    />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            ) :  <div> jojo</div>
        }
    </div>
}

export default Index