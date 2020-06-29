import { ICustomer } from '../interfaces/ICustomer';
import { Customer } from './Customer';

export class Company extends Customer implements ICustomer {

    constructor(
        public id: number,
        public customerName: string,
        public phone: string,
        public address: string,
        public type: number,
    ) {
        super();
    }

    getType(): string {
        return 'Company'
    }

}