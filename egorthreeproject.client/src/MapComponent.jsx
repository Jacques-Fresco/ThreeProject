import React, { useEffect } from 'react';

const initializeMap = () => {
    ymaps.ready(() => {
        const map = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    });
};


const MapComponent = () => {
    useEffect(() => {
        initializeMap();
      }, []);
    
      return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      );
};
export default MapComponent;