import React from 'react';
import MarkerManager from '../util/marker_manager';
import ReactDOM from 'react-dom';

class BizMap extends React.Component {

  constructor(props){
    super(props);
    this.addBiz = this.addBiz.bind(this);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    // set the map to show manhattan
    const mapOptions = {
      center: { lat: 40.7831, lng: -73.9712 },
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.listenForMove();
    this.props.bizs.forEach(this.addBiz);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers();
  }

  addBiz (biz) {
    const pos = new google.maps.LatLng(biz.lat, biz.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    marker.addListener('click', () => {
      alert('clicked on: ${biz.name}');
    });
  }

  listenForMove () {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      // alert('map has moved, check console to see updated bounds');

      console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());
    });
  }

  render () {
    return(
      <div ref={ map => this.mapNode = map } id="map-container"></div>
    );
  }
}

export default BizMap;
