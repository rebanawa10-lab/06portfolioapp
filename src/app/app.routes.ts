import { Routes } from '@angular/router';



// Add:

// Home
import { Home } from './home/home';

import { Salesman } from  './portfoliomenu/salesman/salesman';
import { Salesmanyr } from  './portfoliomenu/salesmanyr/salesmanyr';

export const routes: Routes = [

    { path: '', component: Home },  // Home

    { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },

    // in a lazy module
    // { path: '', loadChildren: () => import('./home/home').then(m => m.Home) },
    { path: 'salesman', component: Salesman }, 
    { path: 'salesmanyr', component: Salesmanyr  }, 
    { path: '**', component: Home }

];
