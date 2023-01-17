import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'


const Clientes = () => {
    const [data, setData] = useState(null)

    function Encabezado(){
        return <h1>Hola mara</h1>
    }

    const traerData = async () => {
        const response = await axios.get('http://localhost:8000/api/clientes')
        console.log(response.data)
    }

    const mandarData = async () => {
        const response = await axios.post('http://localhost:8000/api/clientes', {})
        console.log(response.data)
    }

    async function traerData2(){
        const { data } = await axios.get('http://localhost:8000/api/clientes')
        data.map(x => console.log(x.id))
    }

    useEffect(() => {
        traerData2()
    }, [])

    return (
        <div>
            <Encabezado />
            <Link to="/clientes/crear">Crear</Link>
            <h1>Nombre: </h1>

            {data && 
                data.map(x => {return <p> {x.nombre}</p> })
            } 

        </div>
        
    )
}

export default Clientes