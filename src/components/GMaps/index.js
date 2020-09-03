import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 34.057923,
      lng: -117.937425,
    },
    zoom: 13,
  };

  render() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    return (
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={34.057923} lng={-117.937425} color="red" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmap;
