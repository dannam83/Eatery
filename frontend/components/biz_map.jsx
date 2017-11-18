import React from 'react';
// import MarkerManager from '../util/marker_manager';
import ReactDOM from 'react-dom';

class BizMap extends React.Component {

  constructor(props){
    super(props);
    this.addBiz = this.addBiz.bind(this);
  }

  componentDidMount() {

    const mapOptions = {
      center: { lat: 40.76294719967364, lng: -73.97823811645509 },
      zoom: 13
    };
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map);

    // this.listenForMove();
    // this.props.bizs.forEach((biz, index) => {
    //   let label = (index + 1).toString();
    //   this.addBiz(biz, label);
    // });
  }

  componentDidUpdate() {
    let count = 0;
    this.props.bizs.forEach(biz => {
      count++;
      let label = count.toString();
      this.addBiz(biz, label);
    });
  }
    // this.MarkerManager.updateMarkers();

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
