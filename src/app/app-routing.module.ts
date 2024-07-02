import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserRouteAccessService } from './user-route-access-service';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./pages/login/login.module').then((m) => m.LoginModule),
  // },
  // {
  //   path: '',
  //   canActivate: [UserRouteAccessService],
  //   component: LayoutComponent,
  //   loadChildren: () =>
  //     import('./layout/layout.module').then((m) => m.LayoutModule),
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [UserRouteAccessService],
    component: LayoutComponent,
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
