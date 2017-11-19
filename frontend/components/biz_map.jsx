import React from 'react';
// import MarkerManager from '../util/marker_manager';
import ReactDOM from 'react-dom';

class BizMap extends React.Component {

  constructor(props){
    super(props);
    this.addBiz = this.addBiz.bind(this);
  }

  // componentDidMount() {
  //   // const firstBiz = this.props.bizs.first;
  //   // const centerLat = firstBiz.lat || 40.7629471996736;
  //   // const centerLng = firstBiz.lng || -73.97823811645509;
  //   const mapOptions = {
  //     center: { lat: 40.7629471996736, lng: -73.97823811645509 },
  //     zoom: 13
  //   };
  //   // wrap the mapDOMNode in a Google Map
  //   this.map = new google.maps.Map(this.mapNode, mapOptions);
  //   // this.MarkerManager = new MarkerManager(this.map);
  //   this.listenForMove();
  //   this.props.bizs.forEach((biz, index) => {
  //     let label = (index + 1).toString();
  //     this.addBiz(biz, label);
  //   });
  // }

  // componentWillReceiveProps(nextProps) {
  //   let count = 0;
  //   this.props.bizs.forEach(biz => {
  //     count++;
  //     let label = count.toString();
  //     this.addBiz(biz, label);
  //   });
  // }
  componentDidUpdate(prevProps, prevState) {
    let bizCoords;
    let mapOptions;
    const bizs = this.props.bizs;
    const prevBizs = prevProps.bizs;
    if (bizs.length != prevBizs.length || bizs[0] != prevBizs[0]) {
      if (this.props.bizs.length > 0) {
        const biz = this.props.bizs[0];
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
    // wrap the mapDOMNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      let count = 0;
      this.props.bizs.forEach(biz => {
        count++;
        let label = count.toString();
        this.addBiz(biz, label);
      });
    }
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
