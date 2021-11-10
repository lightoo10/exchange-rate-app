import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exchange-search',
  templateUrl: './exchange-search.component.html',
  styleUrls: ['./exchange-search.component.scss']
})
export class ExchangeSearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onEntering(value: string) {
    this.onSearch.emit(value);
  }

}
