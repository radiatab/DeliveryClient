import { Component, OnInit } from '@angular/core';
import {Tour} from '../../models/tour.model';
import { TourService } from '../../services/tour.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent  implements OnInit {
  tours: Tour[] = [];
  tourIdToDelete: number | null = null;

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.getTours();
  }

  getTours(): void {
    this.tourService.getAllTours()
      .subscribe((tours: Tour[]) => {
        this.tours = tours;
        console.log('Liste des tours :', this.tours);
      }, (error) => {
        console.error('Erreur lors de la récupération des tours :', error);
      });
  }
  
 
  
}
