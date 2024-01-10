import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UserComponent } from './user/user.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [ 
  { path: '', component: CustomerListComponent },
  { path: 'user', component: UserComponent },
  { path: 'father', component: FatherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

