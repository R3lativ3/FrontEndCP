import 'leaflet/dist/leaflet.css'
import React from 'react'
import { CheckCircleTwoTone } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

const Index = (props) => {
    const { coordenates } = props
    console.log(coordenates)
    console.log(coordenates[0].coord)

    function setMarkers(coord){

        return coord.map((x) => (
            <Marker 
                position={x.coord} 
            >
                <Popup> {x.text} <br /> </Popup>
            </Marker>
        ))
    }
    return (
         <MapContainer center={coordenates[0].coord} zoom={16} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />

            <Polyline 
                key="1" 
                positions={coordenates.map(x => x.coord)} 
                color={'blue'} 
            />

            {setMarkers(coordenates)}

        </MapContainer> 
    )
}

export default Index