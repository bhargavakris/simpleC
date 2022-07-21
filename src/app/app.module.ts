import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UsdInrPipe } from './usd-inr.pipe';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListProfileComponent,
    HighlightDirective,
    UsersComponent,
    UsdInrPipe,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
