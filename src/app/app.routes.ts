import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';

const APP_ROUTES: Routes = [
 { path: 'inicio', component: HomeComponent },
 { path: 'tienda', component: StoreComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
