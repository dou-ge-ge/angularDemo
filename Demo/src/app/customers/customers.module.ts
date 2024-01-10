import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UserComponent } from './user/user.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerListComponent,
    UserComponent,
    FatherComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ],
})
export class CustomersModule { }
