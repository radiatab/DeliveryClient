import { DeliveryPerson } from './delivery-person.model';
import { Tour } from './tour.model';

export interface Delivery {
  id: number;
  addressFrom: string;
  addressTo: string;
  deliveryDate: Date; 
  packageWeight: number;
  deliveryPersons: DeliveryPerson[];
  tours: Tour[];
}
