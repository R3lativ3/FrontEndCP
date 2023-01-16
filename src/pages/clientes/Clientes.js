import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'


const Clientes = () => {
    const [data, setData] = useState(null)

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
        setData(data)
        data.map(x => console.log(x.id))
    }

    useEffect(() => {
        traerData2()
    }, [])


    return (
        <div>
            <Link to="/clientes/crear">Crear</Link>

            <h1>Nombre:</h1>
            {data && 
                data.map(x => {return <p> {x.nombre}</p> })
            } 

        </div>
        
    )
}

export default Clientes