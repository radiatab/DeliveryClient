import { DeliveryPerson } from '../models/delivery-person.model';

export interface DeliveryPersonDetailsDTO {
  deliveryPerson: DeliveryPerson;
  deliveryCount: number;
  tourCount: number;
}