import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CounterButton from './CounterButton';
import CreateProposalForm from './CreateProposalForm';
import ProposalEntryTrigger from './ProposalEntryTrigger';

const MapEventHandler = ({ onClick }) => {
  useMapEvents({
    click(e) {
      onClick(e.latlng); // Pass the latitude and longitude of the click event to the parent component
    },
  });

  return null; // This component does not render anything itself
};


const Map = () => {
  const [markers, setMarkers] = useState([]); // Initialize an empty array to store marker positions
  const position = [25.12155560246976, 121.47087983090506]; // Latitude and Longitude of the map center
  const addMarker = (latlng) => {
    setMarkers([...markers, latlng]); // Add the new marker position to the state
  };
  

  return (
    <MapContainer center={position} zoom={13} style={{ height: '800px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapEventHandler onClick={addMarker} />
      {markers.map((position, idx) => (
        <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <div class="headerStyle">Proposal X!</div>
            <ProposalEntryTrigger />
            <CounterButton />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;