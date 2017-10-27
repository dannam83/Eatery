import React from 'react';
import MarkerManager from '../util/marker_manager';

class BizMap extends React.Component {

  componentDidMount() {
    // set the map to show manhattan
    const mapOptions = {
      center: { lat: 40.7831, lng: -73.9712 },
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers();
  }

  render () {
    return(
      <div ref={ map => this.mapNode = map } id="map-container"></div>
    );
  }
}

export default BizMap;
