import { PhoneValidationApiService } from './../services/phone-validation-api.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  validationResult!: Observable<any>;
  name = new FormControl('');
  phoneNumber = new FormControl('', [Validators.required]);
  selectedCountry:any;
  constructor(private service:PhoneValidationApiService) { }

  ngOnInit(): void {
  }

  updateName() {
    this.validateNumber()
  }
  
  selectCountry(country: any) {
    this.selectedCountry = country;
  }

  validateNumber() {
    this.validationResult = this.service.verifyPhoneNum(
      this.phoneNumber.value,
      this.selectedCountry?.key ?? '');
  }
}
