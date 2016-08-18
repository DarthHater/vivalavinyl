import { Routes, RouterModule }   from '@angular/router';
import { ThreadComponent } from './threads/components/index';
import { LoginComponent } from './login/components/index';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'thread', component: ThreadComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);