import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdMenuModule,
  MdToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { InvoicesService } from './invoices.service';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatGridListModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
  ],
  providers: [
    InvoicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
