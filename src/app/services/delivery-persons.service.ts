import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {DeliveryPerson} from '../models/delivery-person.model';
import {DeliveryPersonDetailsDTO} from '../dto/delivery-person-details.dto';

import {Page} from '../interfaces/page.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonsService {

  private apiUrl = 'http://localhost:8083/deliverypersons';
  private sortByTours = false;

  constructor(private http: HttpClient) { }

  addDeliveryPerson(deliveryPerson: DeliveryPerson): Observable<DeliveryPersonDetailsDTO> {
    return this.http.post<DeliveryPersonDetailsDTO>(this.apiUrl, deliveryPerson);
  }

  getAllDeliveryPersonsPage(page: number = 0, size: number = 10): Observable<Page<DeliveryPerson>> {
    // Construction des paramètres de la requête HTTP pour la pagination
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());

    return this.http.get<Page<DeliveryPerson>>(`${this.apiUrl}/page`, { params: params });
  }

  getDeliveryPersonDetails(id: number): Observable<DeliveryPersonDetailsDTO> {
    const url = `${this.apiUrl}/details/${id}`; // Endpoint pour les détails du livreur
    return this.http.get<DeliveryPersonDetailsDTO>(url);
  }

  deleteDeliveryPerson(id: number): Observable<string> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<string>(url)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => {
      return 'Something went wrong, please try again later.';
    });
  }
  getDeliveryPersonById(id: number): Observable<DeliveryPerson> {
    return this.http.get<DeliveryPerson>(`${this.apiUrl}/${id}`);
  }
  /*
  updateDeliveryPerson(id: number, updatedDeliveryPerson: DeliveryPerson): Observable<DeliveryPerson> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<DeliveryPerson>(url, updatedDeliveryPerson);
  }
  */
  updateDeliveryPerson(id: number, updatedDeliveryPerson: DeliveryPerson): Observable<DeliveryPerson> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<DeliveryPerson>(url, updatedDeliveryPerson);
  }

  getAllDeliveryPersonsWithCounts(page: number = 0, size: number = 10): Observable<Page<DeliveryPersonDetailsDTO>> {
    // Crée les paramètres de requête
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());

    // Effectue la requête GET avec les paramètres
    return this.http.get<Page<DeliveryPersonDetailsDTO>>(`${this.apiUrl}/paged-with-counts`, { params });
  }

  getDeliveryPersonsSortedByTours(): Observable<DeliveryPerson[]> {
    return this.http.get<DeliveryPerson[]>(`${this.apiUrl}/sortedbytours`);
  }
  searchDeliveryPersons(
    available?: boolean,
    creationDate?: string,
    creationDateAfter?: string,
    creationDateBefore?: string,
    creationDateBetweenStart?: string,
    creationDateBetweenEnd?: string,
    sortBy?: string
  ): Observable<DeliveryPerson[]> {
    let params = new HttpParams();

    if (available !== undefined && available !== null) {
      params = params.set('available', String(available));
    }
    if (creationDate) {
      params = params.set('creationDate', creationDate);
    }
    if (creationDateAfter) {
      params = params.set('creationDateAfter', creationDateAfter);
    }
    if (creationDateBefore) {
      params = params.set('creationDateBefore', creationDateBefore);
    }
    if (creationDateBetweenStart && creationDateBetweenEnd) {
      params = params.set('creationDateBetweenStart', creationDateBetweenStart)
                   .set('creationDateBetweenEnd', creationDateBetweenEnd);
    }
    if (sortBy) {
      params = params.set('sortBy', sortBy);
    }

    return this.http.get<DeliveryPerson[]>(`${this.apiUrl}/search`, { params });
  }
  
}
