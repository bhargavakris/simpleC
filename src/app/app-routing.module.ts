import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AuthGuard } from './routeGuards/auth.guard';
import { SuperAdminGuard } from './routeGuards/super-admin.guard';
import { ChildAdminGuardGuard } from './routeGuards/child-admin-guard.guard';
import { CustomersGuardGuard } from './routeGuards/customers-guard.guard';
import { UnsavedGuard } from './routeGuards/unsaved.guard';
import { AccountInfoGuard } from './account-info.guard';



const routes : Routes =[

  {
    path: 'loans',
    component: LoansComponent,
    resolve:{
      data:AccountInfoGuard
    }
  },
  {
    path: 'loan-types',
    component: LoanTypesComponent
  },
  {
    path: 'loans/add-loan',
    component: AddLoansComponent
  },
  {
    path:'clients',
    component:ClientsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'search',
    component:SearchComponent,
    canDeactivate:[UnsavedGuard]
  },
  {
    path:'admin',
    children:[
      {
        path:'',
        component:AdminComponent,
        canActivate:[SuperAdminGuard],
      },
      {
        path:'',
        canActivateChild:[ChildAdminGuardGuard],
        children:[ { path:'edit',
        component:AdminEditComponent
    }, {
      path:'delete',
      component:AdminDeleteComponent
  }]
      }

        ]
      },

  { path: 'customers',
  canLoad: [CustomersGuardGuard],
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },


  {
    path:'**',
    component:PageNotFoundComponent
  }

  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
