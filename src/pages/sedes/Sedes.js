import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Sedes.css'
import { Link } from 'react-router-dom'
import uri from '../../static/environment.js'

function Index() {
    const[sedes, setSedes] = useState([])

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios({
                    url: `${uri.uri}/sedes`
                })
                console.log(response)
                setSedes(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getData()
    }, [])

    const RenderSedes = () => {
        return (
            sedes.length > 0 ?
                sedes.map( x => 
                    <Link to={"/rutas/"+x.id}>
                        <div style={{ width: '18rem' }}>
                            <div className="feature-box-1">
                                <div className="feature-content">
                                    <h2>{ x.sede }</h2>
                                    <p>{ x.departamento }</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                )
            : <div>No data</div>
        )
    }

    return (
    <div className='container'>
        <div style={{ flexDirection: 'row' }}>
            {RenderSedes()}
        </div>
    </div>
    ) 
}

export default Index