import { Component,OnInit  } from '@angular/core';
import { DeliveryPersonsService } from '../../services/delivery-persons.service';
import {DeliveryPerson} from '../../models/delivery-person.model';
import {DeliveryPersonDetailsDTO} from '../../dto/delivery-person-details.dto';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delivery-person-details',
  templateUrl: './delivery-person-details.component.html',
  styleUrls: ['./delivery-person-details.component.scss']
})
export class DeliveryPersonDetailsComponent implements OnInit {
  deliveryPersonDetails!: DeliveryPersonDetailsDTO;
  personId: number | null = null;

  constructor(
    private deliveryPersonService: DeliveryPersonsService,
    private route: ActivatedRoute // Injecte ActivatedRoute
  ) {}
/*
  ngOnInit(): void {
    const personId = 1; // Remplace par l'ID de la personne de livraison que tu veux récupérer
    this.deliveryPersonService.getDeliveryPersonDetails(personId)
      .subscribe(
        (data: DeliveryPersonDetailsDTO) => {
          this.deliveryPersonDetails = data;
          console.log('Détails de la personne de livraison :', data);
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails :', error);
        }
      );
  }
  */
  

  ngOnInit(): void {
    // Utilise le paramMap de ActivatedRoute pour obtenir l'ID de l'URL
    this.route.paramMap.subscribe((params) => {
      this.personId = Number(params.get('id')); // Transforme l'ID en nombre
      if (this.personId) {
        this.getDeliveryPersonDetails(this.personId);
      }
    });
  }

  getDeliveryPersonDetails(id: number): void {
    this.deliveryPersonService.getDeliveryPersonDetails(id)
      .subscribe((data) => {
        this.deliveryPersonDetails = data;
        console.log('Détails de la personne de livraison :', data);
      }, (error) => {
        console.error('Erreur lors de la récupération des détails :', error);
      });
  }
}
