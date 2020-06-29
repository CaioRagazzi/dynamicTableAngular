import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ICustomer } from 'src/app/interfaces/ICustomer';
import { Person } from 'src/app/classes/Person';
import { Company } from 'src/app/classes/Company';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'customerName', 'phone', 'address', 'type'];
  dataSource: ICustomer[] = [];

  constructor(public customerservice: CustomerService) { }

  ngOnInit(): void {
    this.customerservice.getCustomers().map(customer => {
      if (customer.type === 1) {
        this.dataSource.push(new Person(customer.id, customer.customerName, customer.phone, customer.address, customer.type))
      }
      if (customer.type === 2) {
        this.dataSource.push(new Company(customer.id, customer.customerName, customer.phone, customer.address, customer.type))
      }
    });
  }

}
