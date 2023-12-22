import { DeliveryPerson } from './delivery-person.model';
import { Delivery } from './delivery.model';
export interface Tour {
    id: number;
    tourName: string;
    description: string;
    startDate: Date; 
    endDate: Date;   
    deliveryPersons: DeliveryPerson[];
    deliveries: Delivery[];
  }
  