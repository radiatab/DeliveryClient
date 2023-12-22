import { Component, OnInit } from '@angular/core';
import { DeliveryPersonsService } from '../../services/delivery-persons.service';
import {DeliveryPerson} from '../../models/delivery-person.model';
import {DeliveryPersonDetailsDTO} from '../../dto/delivery-person-details.dto';

@Component({
  selector: 'app-delivery-person-sorted-by-tours',
  templateUrl: './delivery-person-sorted-by-tours.component.html',
  styleUrls: ['./delivery-person-sorted-by-tours.component.scss']
})
export class DeliveryPersonSortedByToursComponent implements OnInit {
  deliveryPersons: DeliveryPerson[] = [];

  constructor(private deliveryPersonsService: DeliveryPersonsService) {}

  ngOnInit(): void {
    this.getDeliveryPersonsSortedByTours();
  }

  getDeliveryPersonsSortedByTours(): void {
    this.deliveryPersonsService.getDeliveryPersonsSortedByTours()
      .subscribe((sortedDeliveryPersons) => {
        this.deliveryPersons = sortedDeliveryPersons;
      });
  }

}
