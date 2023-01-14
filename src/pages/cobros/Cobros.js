
import axios from "axios";
import React, { useState, useEffect } from "react";
import uri from '../../static/environment.js'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { Table, Button, Card, Space } from 'antd' ;
import Map from '../../components/Map'
import EChart2 from "../rutas/DetalleRuta/Components/GraficaCobroSemanal";


const Index = () => {
  const [cobros, setCobros] = useState([])
  const [coordenates, setCoordenates] = useState([])
  const { fecha } = useParams() || (new Date()).toLocaleDateString()

  useEffect(() => {
    const get = async () => {
      try{
        const { data } = await axios.get(`${uri.uri}/cobros/por-fecha?fecha=${fecha}`)
        console.log(data)
        setCobros(data.response)
        const lats2 = data.response.map(x => { 
          return { text: x.cliente+" Abono: "+x.cobro, coord:{ lat: x.lat, lon: x.lon } }
        })
        setCoordenates(lats2)
      }
      catch(ex){
        console.log("err",ex)
      }
    }
    get()

    return () => {

    }
  }, [])

    const columns = [
        {
            title: 'Cliente',
            dataIndex: 'cliente',
        },
        {
            title: 'Fecha',
            dataIndex: 'fecha'
        },
        {
            title: 'Monto',
            dataIndex: 'montoConInteres',
            sorter: (a, b) => a > b,
        },
        {
            title: 'Plazo',
            dataIndex: 'plazoDias'
        },
        {
            title: 'Cuota',
            dataIndex: 'cobroDiario'
        },

        {
          title: 'Cobrado',
          dataIndex: 'cobro',

        },
        {
          title: 'Abonado',
          dataIndex: 'total'
        }
    ]

    const transformData = (data) => {
        return data.map(x => {
            return {
                key: x.id,
                cliente: x.cliente,
                fecha: new Date(x.fecha).toLocaleTimeString() ,
                montoConInteres: x.montoConInteres,
                plazoDias: x.plazoDias,
                cobroDiario: x.cobroDiario,
                cobro: x.cobro,
                total: x.total,

                acciones: Options(x.id)
            }
        })
    }

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    }

    const Options = (id) => {
      return (
        <Space>
          <Link to={"/rutas/"+id+"/prestamos"}>
            <Button type="cyan" size="small"> Editar </Button>
          </Link>

          <Link to={"/rutas/"+id+"/prestamos"}>
            <Button type="dark" size="small"> Eliminar </Button>
          </Link>

          <Link to={"/rutas/"+id+"/prestamos"}>
            <Button type="dark" size="small"> Ver Credito </Button>
          </Link>
        </Space>
      )
    }

    return (
      <div>
        { coordenates.length > 0 ? <Map coordenates={coordenates}/> : <div> no data </div> } 
        <div>
          <EChart2 />
          <div className="tabled">
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Cobros"
              extra={
                <>
                <Link to="/cobradores/crear">Crear</Link>
                </>
              }
            >
              <div className="table-responsive">
                <Table 
                  columns={columns} 
                  dataSource={transformData(cobros)} 
                  onChange={onChange}  
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>

    )


}

export default Index