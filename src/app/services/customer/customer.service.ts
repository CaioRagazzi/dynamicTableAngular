import { Injectable } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: ICustomer[] = [
    {
      id: 1,
      customerName: "Marcos",
      phone: "11-3508-3535",
      address: "Rua maracá",
      type: 1
    },
    {
      id: 2,
      customerName: "Pedro",
      phone: "11-5214-9632",
      address: "Rua teodoro",
      type: 1
    },
    {
      id: 3,
      customerName: "Company ABC",
      phone: "11-8541-5236",
      address: "Avenida faria lima",
      type: 2
    },
    {
      id: 4,
      customerName: "Industry 123",
      phone: "11-3657-8453",
      address: "Avenida paulista",
      type: 2
    }
  ]

  constructor() { }

  getCustomers(): ICustomer[]{
    return this.customers;
  }
}
