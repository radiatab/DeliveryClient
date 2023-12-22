import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DeliveryPersonsService } from '../../services/delivery-persons.service';
import {DeliveryPerson} from '../../models/delivery-person.model';
import {DeliveryPersonDetailsDTO} from '../../dto/delivery-person-details.dto';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';




@Component({
  selector: 'app-delivery-personnels',
  templateUrl: './delivery-personnels.component.html',
  styleUrls: ['./delivery-personnels.component.scss']
})

export class DeliveryPersonnelsComponent implements OnInit {
  deliveryPersons: DeliveryPerson[] = [];
  currentPage = 0;
  pageSize = 10; // Taille de la page

  constructor(private deliveryPersonService: DeliveryPersonsService,private router: Router) { }

  ngOnInit(): void {
    this.getDeliveryPersons();
  }

  getDeliveryPersons(): void {
    this.deliveryPersonService.getAllDeliveryPersonsPage(this.currentPage, this.pageSize)
      .subscribe((page) => {
        this.deliveryPersons = page.content;
        // Gérer d'autres données de pagination si nécessaire (nombre total de pages, etc.)
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getDeliveryPersons();
  }

  navigateToDetails(deliveryPersonId: number) {
    this.router.navigate(['/delivery-person-details', deliveryPersonId]);
  }

  
    deleteDeliveryPerson(deliveryId: number): void {
      this.deliveryPersonService.deleteDeliveryPerson(deliveryId)
        .subscribe({
          next: (response) => {
            console.log(`La livraison avec l'ID ${deliveryId} a été supprimée avec succès.`, response);
            this.router.navigate(['/user/deliveryPersonnels']);
          },
          error: (error) => {
            console.error('Une erreur s\'est produite lors de la suppression :', error);
            // Traiter l'erreur, afficher un message à l'utilisateur, etc.
          }
        });
    }
   
   
    
    
}

  
 

