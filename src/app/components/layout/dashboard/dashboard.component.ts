import { Component } from '@angular/core';
import { Marker } from '../../../models/marker.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  map: any;
  infoWindow: any;

  links: string[] = ['Inicio', 'Muertos :(', 'Contactos'];
  estados: string[] = ['Infectadas', 'en Cuarentena', 'Sospechosas', 'Recuperadas'];
  numeros: number[] = [124, 325, 543, 33];
  title = 'covid';
  position : {
    lat: -24.085988,
    lng: -65.404885
  };
  label = {
    color: 'blue',
    text: 'sospechoso'
  }
   
 

   mostrar(posicion) {
  this.position.lat = posicion.coords.latitude;
  this.position.lng = posicion.coords.longitude;

  }

   gestionarErrores(error){
  
  alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+
  
  'a internet y habilite la opción permitir compartir ubicación física');
  
  }
  obtener(){ navigator.geolocation.getCurrentPosition(this.mostrar, this.gestionarErrores);}

   constructor() {
     this.obtener()
    // this.map = new google.maps.Map(document.getElementById('this.map'), {
    //   center: {lat: -34.397, lng: 150.644},
    //   zoom: 6
    // });
    // this.infoWindow = new google.maps.InfoWindow;
    // if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(function(position) {
    //         this.position = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };

    //         this.infoWindow.setPosition(this.position);
    //         this.infoWindow.setContent('Location found.');
    //         this.infoWindow.open(this.map);
    //         this.map.setCenter(this.position);
    //       } );
    //     } else {
    //       // Browser doesn't support Geolocation
    //       this.position = {
    //         lat: -34.397, lng: 150.644
    //       };
    //     }
      }


}
