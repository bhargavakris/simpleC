import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { DeleteContactsComponent } from './delete-contacts/delete-contacts.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';



@NgModule({
  declarations: [
    ViewContactsComponent,
    DeleteContactsComponent,
    ListContactsComponent,
    EditContactsComponent,
    AddContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
