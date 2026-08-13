import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Heroes } from './heroes/heroes';
import { Nosotros } from './nosotros/nosotros';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'nosotros', component: Nosotros},
    {path:'heroes', component: Heroes},
    {path:'contacto', component: Contacto},
    {path:'**', component: Home},
];