
import { useEffect, useState } from "react";
import { Card, Table, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const columns = [
    {
      title: "AUTHOR",
      dataIndex: "nombres",
      key: "nombres",
      width: "32%",
    },
    {
      title: "FUNCTION",
      dataIndex: "apellidos",
      key: "apellidos",
    },
  
    {
      title: "STATUS",
      key: "dpi",
      dataIndex: "dpi",
    },
    {
      title: "EMPLOYED",
      key: "telefono",
      dataIndex: "telefono",
    },
  ];


function Cobradores(navigation) {

const [cobradores, setCobradores] = useState([])
useEffect(()=> {
    console.log('trying')

    const datax = async () => {
        try{
            const resp = await axios.get('http://localhost:8000/api/cobradores/')
            console.log(resp.data)
            setCobradores(resp.data)
            console.log(cobradores)
        }catch(e){
            console.log(e)
        }
    }

    datax()
}, [])

  return (
    <>
      <div>
        <div className="tabled">
        <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Authors Table"
              extra={
                <>
                <Link to="/cobradores/crear">Crear</Link>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={cobradores}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
        </div>
      </div>
    </>
  );
}

export default Cobradores;
