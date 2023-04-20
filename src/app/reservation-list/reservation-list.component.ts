import { Component } from '@angular/core';
import { reservation } from '../_models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations:reservation[]=[
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
    {name:"Rafael Garza", email:"Rafael.garza.castillo@u-erre.mx", phone:"8123873054", people: 2, reservationDate:new Date("2023-03-30T06:00:00.000z"), reservationSchedule:7},
  ];

  displayedColumns: string[]=
  ["reservationDate",
    "reservationSchedule",
    "people",
    "name",
    "email",
    "phone",
    "actions",
  ];

  editButtonClicked(){
    alert("Boton de edicion activado")
  }

  deleteButtonClicked(){
    alert("Boton de borrado activado")
  }
}
