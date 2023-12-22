import { Component, OnInit } from '@angular/core';
import { DeliveryPersonsService } from '../../services/delivery-persons.service';
import {DeliveryPerson} from '../../models/delivery-person.model';

@Component({
  selector: 'app-delivery-person-search',
  templateUrl: './delivery-person-search.component.html',
  styleUrls: ['./delivery-person-search.component.scss']
})
export class DeliveryPersonSearchComponent  {
  deliveryPersons: DeliveryPerson[] = [];
  available?: boolean;
  creationDate?: string;
  creationDateAfter?: string;
  creationDateBefore?: string;
  creationDateBetweenStart?: string;
  creationDateBetweenEnd?: string;
  sortBy?: string;

  constructor(private deliveryPersonService: DeliveryPersonsService) {}

  searchDeliveryPersons(): void {
    this.deliveryPersonService.searchDeliveryPersons(
      this.available,
      this.creationDate,
      this.creationDateAfter,
      this.creationDateBefore,
      this.creationDateBetweenStart,
      this.creationDateBetweenEnd,
      this.sortBy
    ).subscribe((data: DeliveryPerson[]) => {
      this.deliveryPersons = data;
    });
  }
  
}
