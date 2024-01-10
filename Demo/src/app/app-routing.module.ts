import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test01Component } from './test01/test01.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'test01',
    component: Test01Component,
    canActivate: [authGuard]
  },
  { path: '', component: Test01Component },
  {
    path: 'customers',
    //loadChildren: 'app/customers/customers.module#CustomersModule'
    loadChildren: () => import('./customers/customers.module').then(it => it.CustomersModule)
  },
  {
    path: 'orders',
    // loadChildren: 'app/orders/orders.module#OrdersModule'
    loadChildren: () => import('./orders/orders.module').then(it => it.OrdersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
