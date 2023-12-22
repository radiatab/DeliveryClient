import { Component } from '@angular/core';
import { DeliveryDto } from '../../dto/delivery.dto';
import { DeliveryService } from '../../services/delivery.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.scss']
})
export class NewDeliveryComponent {

  deliveryData: DeliveryDto = {
    id: 0,
    addressFrom: '',
    addressTo: '',
    deliveryDate: new Date()
  };

  constructor(private deliveryService: DeliveryService, private router: Router) { }

  onSubmit() {
    this.deliveryService.createDelivery(this.deliveryData)
      .subscribe({
        next: (response) => {
          console.log('Livraison créée avec succès : ', response);
          this.router.navigate(['/user/deliveries']);
        },
        error: (error) => {
          console.error('Erreur lors de la création de la livraison : ', error);
          // Gérez les erreurs ici (par exemple, affichez un message d'erreur à l'utilisateur)
        }
      });
  }

}
