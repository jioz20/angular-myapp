import { Component, OnInit } from '@angular/core';
import { BitcoinService} from './bitcoin.service';
@Component({
    selector: 'app-bitcoin',
    template: `<h3>{{stringCoin}}</h3>`
})

export class BitcoinComponent implements OnInit{

    stringCoin : string;
    constructor(private bitcoin: BitcoinService)
    {
       
    }
    ngOnInit(): void {
        this.bitcoin.getBitcoin()
        .then(bitcoinRes => this.stringCoin = <string>bitcoinRes)
        .catch(e => console.log(e));
    }

}