import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule depuis @angular/forms
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { DeliveryPersonnelsComponent } from './pages/delivery-personnels/delivery-personnels.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NewDeliveryPersonComponent } from './pages/new-delivery-person/new-delivery-person.component';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { NewDeliveryComponent } from './pages/new-delivery/new-delivery.component';
import { ToursComponent } from './pages/tours/tours.component';
import { NewTourComponent } from './pages/new-tour/new-tour.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MyProfilComponent } from './pages/my-profil/my-profil.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDeliveryComponent } from './pages/update-delivery/update-delivery.component';
import { DeleteDeliveryComponent } from './pages/delete-delivery/delete-delivery.component';
import { EditDeliveryComponent } from './pages/edit-delivery/edit-delivery.component';
import { DeliveryPersonDetailsComponent } from './pages/delivery-person-details/delivery-person-details.component';
import { UpdateDeliveryPersonComponent } from './pages/update-delivery-person/update-delivery-person.component';
import { DeliveryPersonSearchComponent } from './pages/delivery-person-search/delivery-person-search.component';
import { DeliveryPersonCountComponent } from './pages/delivery-person-count/delivery-person-count.component';
import { DeliveryPersonSortedByToursComponent } from './pages/delivery-person-sorted-by-tours/delivery-person-sorted-by-tours.component';
import { EditTourComponent } from './pages/edit-tour/edit-tour.component';
import { DeleteTourComponent } from './pages/delete-tour/delete-tour.component';
import { TourDateComponent } from './pages/tour-date/tour-date.component';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { TourDeliveryComponent } from './pages/tour-delivery/tour-delivery.component';
import { TourLivraisonComponent } from './pages/tour-livraison/tour-livraison.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    UserDashboardComponent,
    DeliveryPersonnelsComponent,
    NewDeliveryPersonComponent,
    DeliveriesComponent,
    NewDeliveryComponent,
    ToursComponent,
    NewTourComponent,
    MainPageComponent,
    MyProfilComponent,
    UpdateDeliveryComponent,
    DeleteDeliveryComponent,
    EditDeliveryComponent,
    DeliveryPersonDetailsComponent,
    UpdateDeliveryPersonComponent,
    DeliveryPersonSearchComponent,
    DeliveryPersonCountComponent,
    DeliveryPersonSortedByToursComponent,
    EditTourComponent,
    DeleteTourComponent,
    TourDateComponent,
    TourDetailsComponent,
    TourDeliveryComponent,
    TourLivraisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, // Ajoutez FormsModule ici
    DpDatePickerModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
