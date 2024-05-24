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
    path: 'dashboard',

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
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
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
