import { PhoneValidationApiService, } from './../services/phone-validation-api.service';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

import {MatSelectChange} from '@angular/material/select';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  @Output() countryChange = new EventEmitter<any>();ù
  


  constructor(private service:PhoneValidationApiService ) { }
  
  countryInfo: Observable<any[]>;

  ngOnInit(): void {
    this.getCountries();

  }
  getCountries(){
    this.service.getCountryList().
    subscribe(
      data => {
        
        this.countryInfo=data;
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }
  
  selectCountry(selectedCountry: MatSelectChange) {
    this.countryChange.emit(selectedCountry.value);
  } 
 
}
