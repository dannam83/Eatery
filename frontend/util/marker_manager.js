export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(bizs) {
    console.log('time to update');
  }

  createMarkerFromBiz(biz) {
    const maker = new google.maps.Marker({
      position: { lat: biz.lat, lng: biz.lng },
      map: 'map-container',
    });
  }
}
