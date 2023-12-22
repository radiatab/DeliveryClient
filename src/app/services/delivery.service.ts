import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeliveryDto } from '../dto/delivery.dto';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private apiUrl = 'http://localhost:8083/deliveries';
  private apiUrli = 'http://localhost:8083/deliveries/paged';

  constructor(private http: HttpClient) { }

  createDelivery(deliveryData: DeliveryDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, deliveryData);
  }

  getAllDeliveriesPaged(page: number, size: number): Observable<DeliveryDto[]> {
    return this.http.get<any>(`${this.apiUrli}?page=${page}&size=${size}`)
      .pipe(
        map((response: any) => {
          return response.content.map((delivery: any) => {
            return {
              id: delivery.id,
              addressFrom: delivery.addressFrom,
              addressTo: delivery.addressTo,
              deliveryDate: new Date(delivery.deliveryDate) // Conversion de string en Date
            };
          });
        })
      );
  }
  /*
  deleteDelivery(deliveryId: number): Observable<any> {
    const url = `${this.apiUrl}/${deliveryId}`;
    return this.http.delete<any>(url, { observe: 'response' });
  }
  */
  deleteDelivery(deliveryId: number): Observable<any> {
    const url = `${this.apiUrl}/${deliveryId}`;
    return this.http.delete(url, { observe: 'response' });
  }

  updateDeliveryField(deliveryId: number, field: string, value: string): Observable<any> {
    const url = `${this.apiUrl}/${deliveryId}`;
    const body = { field, value };

    return this.http.patch(url, body);
  }
 
}
