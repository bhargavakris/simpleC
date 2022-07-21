import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingsComponent } from './leads-listings/leads-listings.component';
import { LeadsGridComponent } from './leads-listings/leads-grid/leads-grid.component';
import { DownloadExcelComponent } from './leads-listings/leads-tools/download-excel/download-excel.component';
import { LeadsToolsComponent } from './leads-listings/leads-tools/leads-tools.component';
import { DownloadPdfComponent } from './leads-listings/leads-tools/download-pdf/download-pdf.component';



@NgModule({
  declarations: [
    LeadsListingsComponent,
    LeadsGridComponent,
    DownloadExcelComponent,
    LeadsToolsComponent,
    DownloadPdfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
