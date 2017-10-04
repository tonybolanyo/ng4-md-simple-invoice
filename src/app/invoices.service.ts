import { Injectable } from '@angular/core';

import { Invoice } from './invoice';

@Injectable()
export class InvoicesService {

  constructor() { }

  getInvoice(): Invoice {

    const sample: Invoice = {
      id: 1,
      number: 33,
      date: new Date(),
      customer: 'Pepito Gafotas',
      address: 'c/ Mi casa, 37\n46000 Valencia'
    }

    return sample;
  }
}
