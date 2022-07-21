import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';

const routes : Routes =[

  {
    path: 'loans',
    component: LoansComponent
  },
  {
    path: 'loan-types',
    component: LoanTypesComponent
  },
  {
    path: 'loans/add-loan',
    component: AddLoansComponent
  }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule
  ]
})

export class AppRoutingModule { }
