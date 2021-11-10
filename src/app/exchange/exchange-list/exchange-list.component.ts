import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exchange } from '../../model/exchange.model';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss']
})
export class ExchangeListComponent implements OnInit {

  @Input() lstExchange: Exchange[] | undefined;
  @Output() onSelected = new EventEmitter<Exchange>();

  constructor() { }

  ngOnInit() {
  }

  viewDetail(exchange : Exchange){
    this.onSelected.emit(exchange);
    console.log(exchange);
  }

}
