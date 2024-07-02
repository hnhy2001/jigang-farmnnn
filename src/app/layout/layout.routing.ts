import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { CustomerComponent } from '../pages/customer/customer.component';
import { SetingComponent } from '../pages/seting/seting.component';
import { AddUserComponent } from '../pages/add-user/add-user.component';
import { AddCustomerComponent } from '../pages/add-customer/add-customer.component';

export const LayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "user", component: DashboardComponent},
  { path: "customer", component: CustomerComponent},
  { path: "seting", component: SetingComponent},
  { path: "add-user", component: AddUserComponent},
  { path: "edit-user/:id", component: AddUserComponent},
  { path: "add-customer", component: AddCustomerComponent},
  { path: "edit-customer/:id", component: AddCustomerComponent}

];
