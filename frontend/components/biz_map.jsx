import React from 'react';
// import MarkerManager from '../util/marker_manager';
import ReactDOM from 'react-dom';

class BizMap extends React.Component {

  constructor(props){
    super(props);
    this.addBiz = this.addBiz.bind(this);
  }

  componentDidMount() {
    this.drawMap(this.props.bizs);
  }

  componentDidUpdate(prevProps, prevState) {
    const bizs = this.props.bizs;
    const prevBizs = prevProps.bizs;
    if (bizs.length != prevBizs.length || bizs[0] != prevBizs[0]) {
      this.drawMap(this.props.bizs);
    }
  }
  // this.MarkerManager.updateMarkers();

  drawMap (bizs) {
    const mapOptions = this.mapSetup(bizs);
  // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let count = 0;
    bizs.forEach(biz => {
      count++;
      let label = count.toString();
      this.addBiz(biz, label);
    });
  }

  mapSetup (bizs) {
    let bizCoords;
    let mapOptions;
    if (bizs.length > 0) {
      const biz = bizs[0];
      bizCoords = { lat: biz.lat, lng: biz.lng };
    }
    if (bizCoords) {
      mapOptions = {
        center: bizCoords,
        zoom: 13
      };
    } else {
      mapOptions = {
        center: { lat: 40.7629471996736, lng: -73.97823811645509 },
        zoom: 13
      };
    }
    return mapOptions;
  }

  addBiz (biz, label) {
    const pos = new google.maps.LatLng(biz.lat, biz.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      label: label
    });
    marker.addListener('click', () => {
      alert(`clicked on: ${biz.name}`);
    });
  }

  listenForMove () {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });
  }

  render () {
    return(
      <div ref={ map => this.mapNode = map } id="map-container"></div>
    );
  }
}

export default BizMap;
