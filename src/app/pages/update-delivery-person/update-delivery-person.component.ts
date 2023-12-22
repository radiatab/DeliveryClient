import { Component, OnInit } from '@angular/core';
import { DeliveryPersonsService } from '../../services/delivery-persons.service';
import { ActivatedRoute } from '@angular/router';
import {DeliveryPerson} from '../../models/delivery-person.model';
import {DeliveryPersonDetailsDTO} from '../../dto/delivery-person-details.dto';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-delivery-person',
  templateUrl: './update-delivery-person.component.html',
  styleUrls: ['./update-delivery-person.component.scss']
})
export class UpdateDeliveryPersonComponent   {

  updatedDeliveryPerson: DeliveryPerson = {
    id: 0, // Remplace avec l'ID approprié
    name: '',
    available: false,
    creationDate: new Date()
  };

  constructor(private deliveryPersonService: DeliveryPersonsService,private router: Router) {}

  updateDeliveryPerson(id: number): void {
    this.deliveryPersonService.updateDeliveryPerson(id, this.updatedDeliveryPerson)
      .subscribe((updatedPerson: DeliveryPerson) => {
        console.log('Livreur mis à jour :', updatedPerson);
        this.router.navigate(['/user/deliveryPersonnels']);
        // Réinitialiser les valeurs après la mise à jour si nécessaire
        this.updatedDeliveryPerson = {
          id: 0,
          name: '',
          available: false,
          creationDate: new Date()
        };
      }, (error) => {
        console.error('Erreur lors de la mise à jour du livreur :', error);
      });
  }
}