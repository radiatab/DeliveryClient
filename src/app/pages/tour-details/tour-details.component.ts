import { Component, OnInit } from '@angular/core';
import { TourService } from '../../services/tour.service';
import {TourDto} from '../../dto/tour.dto';
import { tap, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {
  tourDetails: TourDto | undefined;
  tourId: number | undefined;

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Récupère l'ID de la tournée depuis les paramètres d'URL
    this.route.params.subscribe(params => {
      this.tourId = +params['id']; // Convertit l'ID en nombre (si nécessaire)
      this.getTourDetails();
    });
  }

  getTourDetails() {
    if (this.tourId) {
      this.tourService.getTourById(this.tourId)
        .subscribe(
          (tourDetails) => {
            this.tourDetails = tourDetails;
            console.log('Détails de la tournée : ', this.tourDetails);
          },
          (error) => {
            console.error('Erreur lors de la récupération des détails de la tournée : ', error);
          }
        );
    }
  }

}
