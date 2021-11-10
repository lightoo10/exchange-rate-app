import { Component, OnInit, Input } from '@angular/core';
import { Exchange } from 'src/app/model/exchange.model';

@Component({
  selector: 'app-exchange-list-item',
  templateUrl: './exchange-list-item.component.html',
  styleUrls: ['./exchange-list-item.component.scss']
})
export class ExchangeListItemComponent implements OnInit {

  @Input() exchange? : Exchange;
  constructor() { }

  ngOnInit() {
  }

}
