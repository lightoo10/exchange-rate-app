import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ConversionModule } from './conversion/conversion.module';
import { LoadGuard } from './core/load-guard';
import { ExchangeModule } from './exchange/exchange.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'conversion',
    loadChildren: () => ConversionModule
  },
  {
    path: 'exchange',
    loadChildren: () => ExchangeModule
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
    canLoad: [LoadGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
