import { Component } from '@angular/core';
import { TourService } from '../../services/tour.service';
import {TourDto} from '../../dto/tour.dto';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent {

  updatedTourDto: TourDto = {
    id: null,
    tourName: '',
    description: '',
    startDate: null,
    endDate: null,
    deliveryPersonId: null
    // Initialise les autres champs à mettre à jour avec leurs nouvelles valeurs
  };

  constructor(private tourService: TourService) { }

  updateTour(id: number) {
    this.tourService.updateTour(id, this.updatedTourDto)
      .subscribe(
        (updatedTour) => {
          console.log('Tournée mise à jour avec succès : ', updatedTour);
          // Gérer la tournée mise à jour, par exemple, afficher un message de succès
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la tournée : ', error);
          // Gérer l'erreur, par exemple, afficher un message d'erreur
        }
      );
  }

}
