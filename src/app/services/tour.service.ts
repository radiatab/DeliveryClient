import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tour} from '../models/tour.model';
import { Page } from '../interfaces/page.interface';
import {TourDto} from '../dto/tour.dto';
import { catchError, map} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TourService {

  private baseUrl = 'http://localhost:8083/tours'; // Remplace avec ton URL appropriée

  constructor(private http: HttpClient) { }

  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.baseUrl);
  }

  createTour(tourDto: any, deliveryPersonId: number): Observable<any> {
    const url = `${this.baseUrl}/create/${deliveryPersonId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, tourDto, { headers });
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Erreur inconnue';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      errorMessage = `Code d'erreur : ${error.status}\nMessage : ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  updateTour(id: number, updatedTourDto: TourDto): Observable<TourDto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<TourDto>(url, updatedTourDto)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteTourById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  getToursByDate(date: string, page: number, size: number): Observable<TourDto[]> {
    const url = `${this.baseUrl}/byDate`;
    let params = new HttpParams()
      .set('date', date)
      .set('page', page.toString())
      .set('size', size.toString());
  
    return this.http.get<any>(url, { params }).pipe(
      map((response: any) => response.content || []), // Vérifie si 'content' existe dans la réponse
      catchError((error) => {
        console.error('Erreur lors de la récupération des tournées par date : ', error);
        return [];
      })
    );
  
}
getTourById(tourId: number): Observable<TourDto> {
  const url = `${this.baseUrl}/${tourId}`;
  return this.http.get<TourDto>(url);
}
getToursByDeliveryPersonId(deliveryPersonId: number, page: number, size: number): Observable<Page<TourDto>> {
  const url = `${this.baseUrl}/delivery/${deliveryPersonId}`;
  let params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

  return this.http.get<Page<TourDto>>(url, { params });
}

addDeliveriesToTour(tourId: number, deliveryIds: number[]): Observable<any> {
  const url = `${this.baseUrl}/${tourId}/deliveries/add`;
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<any>(url, deliveryIds, { headers });
} 
}