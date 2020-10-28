import React from 'react';
import {Link} from "react-router-dom";
import mapMarkerImg from '../images/Local.svg';
import {FiPlus} from "react-icons/fi";
import {Map, TileLayer} from "react-leaflet"
import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'



function OrphanagesMap() {

    const token = 'pk.eyJ1IjoiaWxvdmV0czEzIiwiYSI6ImNqczRoNHh0bzA0eWg0OXJ3bzl3Z2dxMnYifQ.bv49L7eJGITMKOiO8UzzBw'
  return (
    <div  id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="map-markger"/>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando sua visita :)</p>
            </header>
            <footer>
                <strong>São Félix de Minas</strong>
                <span>Minas gerais</span>
            </footer>            
        </aside>
        <Map center={[-18.5683042,-41.5874276]} zoom={15} style={{width: "100%", height: "100%"}}>
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
           <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`} />
        </Map>
        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#fff" />
        </Link>
    </div>
  );
}

export default OrphanagesMap;
