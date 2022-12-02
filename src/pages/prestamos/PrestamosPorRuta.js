import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Table, Button, Space } from "antd";
import { useParams } from "react-router-dom";
import uri from '../../static/environment'
import { Link } from 'react-router-dom'

function PrestamosPorRuta() {
  const [prestamos, setPrestamos] = useState([])
  const [id] = useState(useParams().id) 

  const columns = [
      {
        title: "FECHA",
        dataIndex: "fecha"
      },
      {
        title: "CLIENTE",
        dataIndex: "cliente"
      },
      {
        title: "COBRADOR",
        dataIndex: "cobrador"
      },
      {
        title: "M/CON INTERES",
        dataIndex: "montoConInteres"
      },
      {
        title: "PLAZO",
        dataIndex: "plazoDias"
      },
      {
        title: "TOTAL PAGADO",
        dataIndex: "pagado"
      },
      {
        title: "DIAS COBRADOS",
        dataIndex: "cobroEnDias",
      },
      {
        title: "ACCIONES",
        dataIndex: "acciones"
      }
  ]

  const transformData = (data) => {
    return data.map(x => {
        return {
            key: x.id.toString(),
            fecha: x.fecha.split('T')[0],
            cliente: x.cliente,
            cobrador: x.cobrador,
            montoConInteres: `${ x.montoConInteres } Incluye ${x.porcentajeInteres}% Interes`,
            plazoDias: `Dias: ${x.plazoDias} cuota: ${x.cuota}`,
            pagado: x.pagado,
            cobroEnDias: Math.round(x.cobroEnDias),
            acciones: Options(x.id)
        }
    })
  }

  const Options = id => {
    return (
      <Space>
        <Link to={"/rutas/"+id+"/prestamos"}>
          <Button type="cyan" size="small"> Editar </Button>
        </Link>

        <Link to={"/rutas/"+id+"/prestamos"}>
          <Button type="dark" size="small"> Ver </Button>
        </Link>
      </Space>
    )
  }

  useEffect(() => {
    const getRutas = async () => {
      try{
        const { data } = await axios.get(`${uri.uri}/prestamos/ruta/${id}`)
        setPrestamos(data)
        console.log(prestamos)
      }
      catch(ex){
        console.log("err",ex)
      }
    }
    getRutas()
  },[])

  return (
    <div className="tabled">
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="Prestamos de Ruta"
        extra={
          <>
          <Link to="/cobradores/crear">Crear</Link>
          </>
        }
      >
        <div className="table-responsive">
          <Table 
            columns={columns} 
            dataSource={transformData(prestamos)} 
            pagination={false}
            className="ant-border-space"
          />
        </div>
      </Card>
    </div>
  )
}

export default PrestamosPorRuta