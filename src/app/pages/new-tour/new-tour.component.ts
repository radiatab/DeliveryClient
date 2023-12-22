import { Component } from '@angular/core';
import {Tour} from '../../models/tour.model';
import { TourService } from '../../services/tour.service';
import {TourDto} from '../../dto/tour.dto';
import { HttpClient, HttpParams,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.scss']
})
export class NewTourComponent {

  tourDto: TourDto = {
    id: null,
    tourName: '',
    description: '',
    startDate: null,
    endDate: null,
    deliveryPersonId: null
  };

  deliveryPersonId: number = 1; // Remplace avec l'ID du livreur approprié

  constructor(private tourService: TourService) { }

  createTour() {
    this.tourService.createTour(this.tourDto, this.deliveryPersonId)
      .subscribe(
        (createdTour) => {
          console.log('Tournée créée avec succès : ', createdTour);
          // Gérer la tournée créée, par exemple, afficher un message de succès
        },
        (error) => {
          console.error('Erreur lors de la création de la tournée : ', error);
          // Gérer l'erreur, par exemple, afficher un message d'erreur
        }
      );
  }
}