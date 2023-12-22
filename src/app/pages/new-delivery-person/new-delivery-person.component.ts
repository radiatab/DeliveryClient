import { Component } from '@angular/core';
import { DeliveryPersonsService } from '../../services/delivery-persons.service';
import {DeliveryPerson} from '../../models/delivery-person.model';
import {DeliveryPersonDetailsDTO} from '../../dto/delivery-person-details.dto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-delivery-person',
  templateUrl: './new-delivery-person.component.html',
  styleUrls: ['./new-delivery-person.component.scss']
})
export class NewDeliveryPersonComponent {

  newDeliveryPerson: DeliveryPerson = {
    id: 0,
    name: '',
    available: false,
    creationDate: new Date() // Tu peux initialiser la date avec une valeur par défaut si nécessaire
  };

  constructor(private deliveryPersonService: DeliveryPersonsService, private router: Router) {}

  onSubmit() {
    this.deliveryPersonService.addDeliveryPerson(this.newDeliveryPerson).subscribe({
      next: (result: DeliveryPersonDetailsDTO) => {
        console.log('Personne de livraison ajoutée avec succès :', result);
        this.router.navigate(['/user/deliveryPersonnels']);
        // Réinitialise le modèle pour permettre l'ajout d'autres personnes
        this.newDeliveryPerson = {
          id: 0,
          name: '',
          available: false,
          creationDate: new Date()
        };
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'ajout de la personne de livraison :', error);
      }
    });
  }
  

}
