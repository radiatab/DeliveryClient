import { Component } from '@angular/core';
import { TourService } from '../../services/tour.service';
@Component({
  selector: 'app-delete-tour',
  templateUrl: './delete-tour.component.html',
  styleUrls: ['./delete-tour.component.scss']
})
export class DeleteTourComponent {
  tourIdToDelete: number = 0;

  constructor(private tourService: TourService) { }

  deleteTour(): void {
    if (this.tourIdToDelete) {
      this.tourService.deleteTourById(this.tourIdToDelete).subscribe(
        () => {
          console.log('La tournée a été supprimée avec succès.');
          // Effectuez ici les actions après la suppression réussie, si nécessaire
        },
        (error) => {
          console.error('Erreur lors de la suppression de la tournée : ', error);
          // Gérez l'erreur ici, si nécessaire
        }
      );
    } else {
      console.error('Veuillez entrer un ID de tournée valide.');
      // Gérez l'absence d'ID ici, si nécessaire
    }
  }
}
