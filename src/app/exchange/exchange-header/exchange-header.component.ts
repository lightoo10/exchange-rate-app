import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-header',
  templateUrl: './exchange-header.component.html',
  styleUrls: ['./exchange-header.component.scss']
})
export class ExchangeHeaderComponent implements OnInit {

  @Input() title : String | undefined;

  constructor() { }

  ngOnInit() {
  }

}
