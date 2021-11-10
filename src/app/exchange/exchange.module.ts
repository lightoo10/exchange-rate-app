import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange.component';
import { ExchangeListComponent } from './exchange-list/exchange-list.component';
import { ExchangeSearchComponent } from './exchange-search/exchange-search.component';
import { ExchangeHeaderComponent } from './exchange-header/exchange-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { ExchangeListItemComponent } from './exchange-list-item/exchange-list-item.component';

@NgModule({
  declarations: [ExchangeComponent, ExchangeListComponent, ExchangeSearchComponent, ExchangeHeaderComponent, ExchangeListItemComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class ExchangeModule { }
