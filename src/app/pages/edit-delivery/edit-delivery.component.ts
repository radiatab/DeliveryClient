import { Component } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.scss']
})
export class EditDeliveryComponent {

  deliveryId: number = 0; // Initialisation par défaut
  field: string = '';
  value: string = '';

  constructor(private deliveryService: DeliveryService, private router: Router) {}

  updateField(): void {
    if (this.deliveryId && this.field && this.value) {
      this.deliveryService.updateDeliveryField(this.deliveryId, this.field, this.value)
        .subscribe({
          next: (response) => {
            console.log('Champ de livraison mis à jour avec succès', response);
            this.router.navigate(['/user/deliveries']);
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour du champ de livraison', error);
          }
        });
    } else {
      console.error('Veuillez remplir tous les champs.');
    }
  }

}
