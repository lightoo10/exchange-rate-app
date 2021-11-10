import { Component, OnInit } from '@angular/core';
import { Exchange } from '../model/exchange.model';
import { ExchangeService } from '../service/exchange.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  selected?: Exchange;
  nameSearch?: any;
  exchangeLst: Exchange[] = [];
  lstExchangeSearch?: Exchange[];
  subscription: Subscription = new Subscription();
  selectedItem?: boolean;
  exchangeSelected?: Exchange;

  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit() {
    this.subscription = this.exchangeService.getLstExchange().subscribe((exchangeLst: Exchange[]) => {
      this.exchangeLst = exchangeLst;
      this.lstExchangeSearch = exchangeLst;
    });
    this.selectedItem = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchExchange(nameSearch: String) {
    this.nameSearch = nameSearch
    console.log(nameSearch);
    this.lstExchangeSearch = this.exchangeLst.filter(exchange => exchange.currencyFrom.toLowerCase().includes(nameSearch.toLowerCase()));
    console.log(this.lstExchangeSearch);
  }

  selectedExchange(exchange: Exchange) {
    this.selectedItem = true;
    this.exchangeSelected = exchange;
    console.log(this.exchangeSelected);
  }

}
