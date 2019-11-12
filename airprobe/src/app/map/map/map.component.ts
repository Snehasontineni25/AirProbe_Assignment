import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ViewChild } from '@angular/core';

declare var google: any;
declare var MarkerClusterer: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private location: Location) { }
  @ViewChild('trackingmap', {static: false}) trackingmap: any;
  mapstyleval = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];
  //end of map
  mapdummyData:any=[{location:[12.9716, 77.5946], image:'assets/bangalore.jpeg', place:'Bangalore', description:'Bangalore Weather'},
    {location:[16.2060, 80.2133], image:'assets/airprobe.jpg', place:'Lingaraopalem', description:'Home Town'},];
  INDIA = { lat: 20.3120868, lng: 74.7320638 };
  map: any;
  latestlocationmap:any;
  groupID;
  toggleDarkView: boolean = false;
  toggleTraffic: boolean = false;
  toggleAgents: boolean = true;
  styledMapType: any;
  planeMapStyle: any;
  mapZoom = 4;
  memberId;
  bounds:any;
	indiaA:any;
	indiaB:any;
  default_styles:any = [];
  gotLocationFromBrowser: boolean = false;
  latlngbounds = new google.maps.LatLngBounds();
  infowindow = new google.maps.InfoWindow;
  geocoder = new google.maps.Geocoder;
  trafficLayer: any;
  Mapstyles:any;
  default_view:any='geometric';//directions
  encodedStr:any;
  lineCoordinates:any=[];//using this red lines plotting
  lineCoordinates_1:any=[];
  waypoints_from_polylines:any=[];//process each polyline waypointss
  direction_services_array:any=[];//fro direction services variables
  keep_direction_services:any=[];//
  waypts_20:any=[];//to call each 20 for built drection
  markers:any = [];//push into all markers
  waypts:any = [];//
 polylines_array:any=[];//to clear all red dotted lines
 points_to_geometric_lines:any=[];//
 pointrs_polylines:any;
 line:any;
 polyline:any=[];
 drawingManager:any;
 placeIdArray:any = [];
 polylines:any = [];
 snappedCoordinates:any = [];
 points:any;
 all_markers:any;
 marker_type:any;
 all_latitudes:any=[];
all_longitudes:any=[];
latlng:any;
imageSrc:any;
stayPointMarker1 = new google.maps.OverlayView();
div_:any;
latlng_:any;
overlay;
allpolylines:any=[];
plotlocationdata:any=[];
agentsData:any = [];
markerCluster:any;
directionsDisplay;
directionsService = new google.maps.DirectionsService();

 

 
  loadmap()
  {
    this.map = new google.maps.Map(document.getElementById('trackingmap'), {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.DRIVING,
      mapTypeControl: false,
      streetViewControl: false,
      gestureHandling: 'greedy',
      center: {lat:20.5937, lng:78.9629}
    }); 
    this.Mapstyles = this.mapstyleval;
    this.trafficLayer = new google.maps.TrafficLayer();
    this.Mapstyles = this.mapstyleval;
  this.map.setOptions({styles: this.Mapstyles});  
  google.maps.event.trigger(this.map, 'resize');
  this.plotmapdata();
  }

  plotmapdata()
  {
    var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var _t = this;
  var opt = {
          "legend": {
              "top" : "#FF0066",
              "avg" : "#FF9933",
              "bad" : "#FFFF00" 
          }
      };
  var cololCode;
  var mapdata =[];
   mapdata = this.mapdummyData;
  _t.markers = mapdata.map((location, i) => {
    let icon = 'assets/location.png';
    return new google.maps.Marker({
      position: {
        lat: parseFloat(location.location[0]),
        lng: parseFloat(location.location[1])
      },
      map:_t.map,
      //options: { title: location.name},
      optimized: false,
      icon:icon,
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    });
  });
  var infowindow = new google.maps.InfoWindow();
   _t.bounds = new google.maps.LatLngBounds();	
   infowindow.close();	
  _t.markers.map((marker, i) => {
     marker.addListener('click', function(event) {
      infowindow.close();
      let cont = '';
     
         let parent = "<div class='row brwin'></div>";
         let seldata:any ='';
         let btn = 'yes';
           seldata = mapdata[i];
        if(seldata)
        {
         infowindow.open(Map, marker);
         let heading = seldata.place;
         let description = seldata.description;
        let img = seldata.image;
        let placediv="<h3 class='row brname'>"+heading+"</h3>";
        let addressdiv = "<div class='row brname'>"+"<div class = 'col-md-4 col-xs-4 col-lg-4 col-sm-4 pad0'> <img class='img-responsive cosp' src="+img+"></img>"+"</div>"+"<div class='col-md-8 col-xs-8 col-lg-8 col-sm-8 contsp'>"+description+"</div>"+"</div>";
        cont ="<div class='row bncont'>"+addressdiv+"</div>";
        infowindow.setContent(cont);
        }
      //infowindow.setContent(parent+assignBtn+"<div style='font-size:10px;width=200px> <p id='content' style='margin-bottom:5px;'><b>"+"Cluster Id : &nbsp;"+durationvalue+' '+"</b></p><p style='margin-bottom:5px;'><b>"+"Location &nbsp; : &nbsp;"+"<span class='comloc' 'style='cursor:pointer;'"+"id="+locValue+">"+locValue+"</span>"+"</b></p></div>");
     });
     marker.addListener('mouseout', function(event) {
         //infowindow.close();
     });
    _t.bounds.extend(new google.maps.LatLng(marker.getPosition().lat(),marker.getPosition().lng()));
  });
  _t.map.fitBounds(_t.bounds);
  _t.map.panToBounds(_t.bounds); 
  directionsDisplay.setMap(this.map);
  }

  ngOnInit() {
       this.loadmap();
  }

}
