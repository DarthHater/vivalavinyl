import { Routes, RouterModule } from '@angular/router';
import { ThreadComponent } from './threads/components/index';
import { LoginComponent } from './login/components/index';
import { PostComponent } from './threadview/components/index';

const appRoutes: Routes = [
  { path: '', component: ThreadComponent},
  { path: 'login', component: LoginComponent },
  { path: 'thread', component: ThreadComponent },
  { path: 'thread/:id', component: PostComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);