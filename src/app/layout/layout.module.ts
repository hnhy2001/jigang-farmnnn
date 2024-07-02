import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout.routing";
import { IonicModule } from "@ionic/angular";
import { LoginComponent } from "../pages/login/login.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { CustomerComponent } from "../pages/customer/customer.component";
import { SetingComponent } from "../pages/seting/seting.component";
import { AddUserComponent } from "../pages/add-user/add-user.component";
import { AddCustomerComponent } from "../pages/add-customer/add-customer.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(LayoutRoutes),
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    CustomerComponent,
    SetingComponent,
    AddUserComponent,
    AddCustomerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
