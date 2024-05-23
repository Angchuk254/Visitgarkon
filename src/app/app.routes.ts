import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AccommodationComponent } from './accommodation/accommodation.component';

export const routes: Routes = [
    {path:'','title':'Home',component:HomeComponent},
    {path:'contact','title':'contact',component:ContactComponent},
    {path:'accommodation','title':'accommodation',component:AccommodationComponent}
];
