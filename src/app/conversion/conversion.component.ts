import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExchangeService } from '../service/exchange.service';
import { ValidatorErrorStateMatcher } from '../util/validator';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  conversionRegisterForm: FormGroup = this.formBuilder.group({
    originCurrency: ['', Validators.required],
    destinationCurrency: ['', Validators.required],
    amount: [0, Validators.required]
  });
  amountConverted: any;
  execute: any;
  validatorErrorStateMatcher = new ValidatorErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
    private exchangeService: ExchangeService) { }

  ngOnInit() {
  }

  convertExchangeRate(user:any) {
    this.exchangeService.convertExchangeRate({ originCurrency: user.originCurrency, destinationCurrency: user.destinationCurrency, amount: user.amount }).subscribe(
      (data) => {
        this.execute = true;
        this.amountConverted = "Monto convertido:" +data.convertedAmount;
      },
      (err) => {
        this.execute = true;
        this.amountConverted = "No se pudo convertir el monto:";
        return;
      },
    );
  }

  clearForm() {
    this.conversionRegisterForm.reset();
    this.amountConverted = "";
    this.execute = false;
  }
}
