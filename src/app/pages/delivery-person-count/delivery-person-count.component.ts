import { Component, OnInit } from '@angular/core';
import { DeliveryPersonsService } from '../../services/delivery-persons.service';
import {DeliveryPerson} from '../../models/delivery-person.model';
import {DeliveryPersonDetailsDTO} from '../../dto/delivery-person-details.dto';
import {Page} from '../../interfaces/page.interface';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-person-count',
  templateUrl: './delivery-person-count.component.html',
  styleUrls: ['./delivery-person-count.component.scss']
})
export class DeliveryPersonCountComponent implements OnInit {

  deliveryPersonsPage: Page<DeliveryPersonDetailsDTO> = {
    content: [],
  pageable: {},
  totalElements: 0,
  totalPages: 0,
  last: false,
  size: 0,
  number: 0,
  sort: {},
  numberOfElements: 0,
  first: false,
  empty: false
  };

  constructor(private deliveryPersonsService: DeliveryPersonsService) { }

  ngOnInit(): void {
    this.getDeliveryPersons();
  }

  getDeliveryPersons(page: number = 0, size: number = 10): void {
    this.deliveryPersonsService.getAllDeliveryPersonsWithCounts(page, size)
      .subscribe((pageData) => {
        this.deliveryPersonsPage = pageData;
      });
  }
}
