import { Component, OnInit, ChangeDetectorRef, OnDestroy   } from '@angular/core';
import { DeliveryDto } from '../../dto/delivery.dto';
import { DeliveryService } from '../../services/delivery.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit{

  
  private destroy$: Subscription = new Subscription();
  deliveries: DeliveryDto[] = [];
  page = 0;
  pageSize = 10;

  constructor(private changeDetectorRef: ChangeDetectorRef,private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.getAllDeliveries();
  }

  getAllDeliveries(): void {
    this.deliveryService.getAllDeliveriesPaged(this.page, this.pageSize)
      .subscribe(deliveries => {
        this.deliveries = deliveries;
      });
  }

  onDelete(deliveryId: number): void {
    this.deliveryService.deleteDelivery(deliveryId)
      .subscribe({
        next: (response) => {
          console.log(`La livraison avec l'ID ${deliveryId} a été supprimée avec succès.`, response);
          // Traiter la suppression réussie si nécessaire, par exemple actualiser la liste des livraisons
        },
        error: (error) => {
          console.error('Une erreur s\'est produite lors de la suppression :', error);
          // Traiter l'erreur, afficher un message à l'utilisateur, etc.
        }
      });
  }
 
  
}

 
  

