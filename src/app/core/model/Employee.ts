import { Payment } from './payment';


export interface Employee {
    value: {
        firstName: string,
        lastName: string,
        gender: string,
        role: string,
        salary: number,
        avatar: string,
        paymentHistory?: Payment[]

    },
    id: string,
}