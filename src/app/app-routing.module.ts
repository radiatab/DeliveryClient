import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { NewDeliveryComponent } from './pages/new-delivery/new-delivery.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ToursComponent } from './pages/tours/tours.component';
import { DeliveryPersonnelsComponent } from './pages/delivery-personnels/delivery-personnels.component';
import { NewDeliveryPersonComponent } from './pages/new-delivery-person/new-delivery-person.component';
import { NewTourComponent } from './pages/new-tour/new-tour.component';
import { MyProfilComponent } from './pages/my-profil/my-profil.component';
import {DeleteDeliveryComponent} from './pages/delete-delivery/delete-delivery.component';
import  {EditDeliveryComponent} from './pages/edit-delivery/edit-delivery.component';
import { DeliveryPersonDetailsComponent } from './pages/delivery-person-details/delivery-person-details.component';
import {DeliveryPersonCountComponent} from './pages/delivery-person-count/delivery-person-count.component';
import { UpdateDeliveryPersonComponent } from './pages/update-delivery-person/update-delivery-person.component';
import {DeliveryPersonSearchComponent } from './pages/delivery-person-search/delivery-person-search.component';
import {DeliveryPersonSortedByToursComponent } from './pages/delivery-person-sorted-by-tours/delivery-person-sorted-by-tours.component';
import { EditTourComponent } from './pages/edit-tour/edit-tour.component';
import { DeleteTourComponent } from './pages/delete-tour/delete-tour.component';
import { TourDateComponent } from './pages/tour-date/tour-date.component';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { TourDeliveryComponent } from './pages/tour-delivery/tour-delivery.component';
import { TourLivraisonComponent } from './pages/tour-livraison/tour-livraison.component';
const routes: Routes = [

  {
     path:'login',
     component:LoginComponent

  },
 
 
  {

    path:'register',
    component:RegisterComponent

  },

  {

   path:'user',
   component:MainPageComponent,
   children: [
     {
      
        path: 'dashboard',
        component:UserDashboardComponent
   
     },
   
     {
       
       path:'update-delivery-person',
       component:UpdateDeliveryPersonComponent
   
     } ,
     {
      path:'delivery-person-sorted-by-tours',
      component:DeliveryPersonSortedByToursComponent
  
   },
     {
       
      path:'deliveries',
      component:DeliveriesComponent
  
    } ,
    {
       
      path:'edit-tour',
      component:EditTourComponent
  
    } ,
    {
       
      path:'tour-date',
      component:TourDateComponent
  
    } ,

    {
       
      path:'tour-livraison',
      component:TourLivraisonComponent
  
    } ,

    {
       
      path:'tour-details',
      component:TourDetailsComponent
  
    } ,

    {
       
      path:'tour-delivery',
      component:TourDeliveryComponent
  
    } ,
    {
       
      path:'delete-tour',
      component:DeleteTourComponent
  
    } ,
     {
       
      path:'edit-delivery',
      component:EditDeliveryComponent
  
    } , 
    {
      path:'delivery-person-count',
      component:DeliveryPersonCountComponent
  
   },
     {

        path:'tours',
        component:ToursComponent
     },
     {

      path:'delivery-person-search',
      component:DeliveryPersonSearchComponent

    },
     {

       path:'deliveryPersonnels',
       component:DeliveryPersonnelsComponent

     },
     {

      path:'deliveryPersonnels',
      component:DeliveryPersonnelsComponent

    },

     {
        
      path:'new-delivery',
      component:NewDeliveryComponent

     },
     {
        
      path:'delete-delivery',
      component:DeleteDeliveryComponent

     },
     {
        
      path:'delivery-person-details/:id',
      component:DeliveryPersonDetailsComponent

     },

     {
        
      path:'new-deliveryPerson',
      component:NewDeliveryPersonComponent

     },

     {
        
      path:'new-deliveryPerson/:idDeliveryPerson',
      component:NewDeliveryPersonComponent

     },


    {
      path:'new-tour',
      component:NewTourComponent

    },

    {
      path:'my-profil',
      component:MyProfilComponent

    },


    

     {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'

     }
   
   
   ]
    } 
];

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
