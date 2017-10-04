import { Component, Input, OnInit } from '@angular/core';

import { Invoice } from '../invoice';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;

  constructor(private _invoiceservice: InvoicesService) {
    this.invoice = _invoiceservice.getInvoice();
  }

  ngOnInit() {
  }

}
