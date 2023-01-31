import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import uri from '../../static/environment.js'
import './Sedes.css'

function Index() {
    const[sedes, setSedes] = useState([])

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios({ url: `${uri}/sedes`})
                setSedes(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getData()
    }, [])

    return (
    <div className='container'>
        <div style={{ flexDirection: 'row' }}>
        {
            sedes.length > 0 ?
                <div className='row'>
                    {sedes.map( x => 
                        <Link className='col-md-6' to={"/rutas/"+x.id} style={{ textDecoration: 'none' }}>
                            <div className="feature-box-1">
                                <div className="feature-content">
                                    <h2>{ x.sede }</h2>
                                    <p>{ x.departamento }</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div> 
            : <div>No data</div>
        }
        </div>
    </div>
    ) 
}

export default Index