import { Component } from '@angular/core';
import { TourService } from '../../services/tour.service';
import {TourDto} from '../../dto/tour.dto';
import { Page } from 'src/app/interfaces/page.interface';
@Component({
  selector: 'app-tour-delivery',
  templateUrl: './tour-delivery.component.html',
  styleUrls: ['./tour-delivery.component.scss']
})
export class TourDeliveryComponent {
  deliveryPersonId: number | undefined;
  toursByDeliveryPerson: Page<TourDto> | undefined;

  constructor(private tourService: TourService) { }

  getToursByDeliveryPerson() {
    if (this.deliveryPersonId) {
      this.tourService.getToursByDeliveryPersonId(this.deliveryPersonId, 0, 10)
        .subscribe(
          (tours) => {
            this.toursByDeliveryPerson = tours;
            console.log('Tournées par livreur : ', this.toursByDeliveryPerson);
          },
          (error) => {
            console.error('Erreur lors de la récupération des tournées par livreur : ', error);
          }
        );
    } else {
      console.warn('Veuillez saisir l\'ID du livreur pour afficher les tournées.');
    }
  }

}
