import { Component } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
@Component({
  selector: 'app-delete-delivery',
  templateUrl: './delete-delivery.component.html',
  styleUrls: ['./delete-delivery.component.scss']
})
export class DeleteDeliveryComponent {

  constructor(private deliveryService: DeliveryService) {}

  onDelete(deliveryId: number): void {
    this.deliveryService.deleteDelivery(deliveryId)
      .subscribe({
        next: () => {
          console.log(`La livraison avec l'ID ${deliveryId} a été supprimée avec succès.`);
          // Effectue des actions supplémentaires si nécessaire après la suppression réussie
        },
        error: (error) => {
          console.error('Une erreur s\'est produite lors de la suppression :', error);
          // Traite l'erreur, affiche un message à l'utilisateur, etc.
        }
      });
  }

}
