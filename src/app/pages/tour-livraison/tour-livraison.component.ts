import { Component } from '@angular/core';
import { TourService } from '../../services/tour.service';
import {TourDto} from '../../dto/tour.dto';
@Component({
  selector: 'app-tour-livraison',
  templateUrl: './tour-livraison.component.html',
  styleUrls: ['./tour-livraison.component.scss']
})
export class TourLivraisonComponent {

  tourId: number = 0; // Initialise l'ID de la tournée
  deliveryIds: number[] = []; // Initialise les IDs de livraisons à ajouter
  addedDeliveriesSuccess: boolean = false; // Pour gérer l'affichage du message de succès

  constructor(private tourService: TourService) {}

  onSubmit() {
    this.tourService.addDeliveriesToTour(this.tourId, this.deliveryIds)
      .subscribe(
        () => {
          this.addedDeliveriesSuccess = true; // Active le message de succès
          // Réinitialise les valeurs des livraisons seulement
          this.deliveryIds = [];
        },
        (error) => {
          console.error('Erreur lors de l\'ajout des livraisons : ', error);
          // Gérer l'erreur ou afficher un message d'erreur à l'utilisateur
        }
      );
  }

}
