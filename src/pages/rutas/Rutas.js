import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import uri from '../../static/environment'
import { Link } from 'react-router-dom'


import { Table, Button, Card, Space } from 'antd' ;
import { SearchOutlined, SmileOutlined } from '@ant-design/icons';

const Index = (props) => {
    const [rutas, setRutas] = useState([])
    let { id } = useParams()
 
    useEffect(() => {
      const getRutas = async () => {
        try{
          const { data } = await axios.get(`${uri.uri}/rutas/sede/${id}`)
          setRutas(data)
        }
        catch(ex){
          console.log("err",ex)
        }
      }
      getRutas()
    },[])

    const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          onFilter: (value, record) => record.name.indexOf(value) === 0,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Ruta',
          dataIndex: 'nombreRuta'
        },
        {
          title: 'Clientes',
          dataIndex: 'cantidadClientes',
          onFilter: (value, record) => record.address.indexOf(value) === 0,
          sorter: (a, b) => a > b,
        },
        {
          title: 'Capital',
          dataIndex: 'capitalGanancia'
        },
        {
          title: 'Cobro Diario',
          dataIndex: 'cobroDiario'
        },
        {
          title: 'Action',
          dataIndex: 'acciones'
        }
    ]

    const transformData = (data) => {
        return data.map(x => {
            return {
                key: x.id,
                nombre: x.nombres +" "+x.apellidos,
                nombreRuta: x.nombreRuta,
                cantidadClientes: x.cantidadClientes,
                capitalGanancia: x.capitalGanancia,
                cobroDiario: x.cobroDiario,
                acciones: Options(x.id)
            }
        })
    }

    const Options = (id) => {
      return (
        <Space>
          <Link to={"/rutas/"+id+"/prestamos"}>
            <Button type="cyan" size="small"> Prestamos </Button>
          </Link>

          <Link to={"/rutas/"+id+"/prestamos"}>
            <Button type="dark" size="small"> Cobros </Button>
          </Link>
        </Space>
      )
    }

    const Tablex = () => <Table columns={columns} dataSource={transformData(rutas)} onChange={onChange}  />;

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (

      <div className="tabled">
        <Card
          bordered={false}
          className="criclebox tablespace mb-24"
          title="Rutas"
          extra={
            <>
            <Link to="/cobradores/crear">Crear</Link>
            </>
          }
        >
          <div className="table-responsive">
            <Table 
              columns={columns} 
              dataSource={transformData(rutas)} 
              onChange={onChange}  
              pagination={false}
              className="ant-border-space"
            />
          </div>
        </Card>
      </div>
/*
      <div>
        { rutas.length > 0 ? (
            <Tablex/>
          ) :  <div> No data</div>
        }
      </div>*/
    )
}

export default Index