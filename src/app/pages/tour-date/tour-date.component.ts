import { Component } from '@angular/core';
import { TourService } from '../../services/tour.service';
import {TourDto} from '../../dto/tour.dto';
import { tap, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-tour-date',
  templateUrl: './tour-date.component.html',
  styleUrls: ['./tour-date.component.scss']
})
export class TourDateComponent {

  tours: TourDto[] = [];
  selectedDate: string = ''; // Variable pour stocker la date sélectionnée

  constructor(private tourService: TourService) { }

  getToursByDate() {
    if (this.selectedDate) {
      this.tourService.getToursByDate(this.selectedDate, 0, 10)
        .subscribe(
          (tours) => {
            this.tours = tours;
            console.log('Tournées récupérées : ', this.tours); // Vérifie la console pour les données récupérées
          },
          (error) => {
            console.error('Erreur lors de la récupération des tournées par date : ', error);
          }
        );
    } else {
      console.warn('Veuillez sélectionner une date.');
    }
  }
  
}
