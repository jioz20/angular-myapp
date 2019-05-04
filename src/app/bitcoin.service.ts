import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BitcoinService {
    
    constructor(private http: HttpClient)
    {
    }
    getBitcoin()
    { 
        return this.http.get('https://chain.so/api/v2/get_address_balance/BTC/18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX')
                    .toPromise()
                    .then(result => JSON.stringify(result))
                    .catch(err => console.log(err))
    }
}