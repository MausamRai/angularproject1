import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AuthGuard } from './core/auth.guard';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {
    //     path: 'register',
    //     component:'registerComponent',
    //   },
    // ],
  },
  {
    path: 'product',
    component: DashboardComponent,
    loadChildren: () =>
      import('./product/product-routing.module').then(
        (p) => p.ProductRoutingModule
      ),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'product',
      //   component: ProductComponent,
      // },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  // { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
