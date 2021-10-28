import { PhoneValidationApiService } from './../services/phone-validation-api.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private country:PhoneValidationApiService ) { }
  
  countryInfo: Observable<any[]>;

  ngOnInit(): void {
    this.getCountries();

  }
  getCountries(){
    this.country.getCountryList().
    subscribe(
      data => {
        
        this.countryInfo=data;
        console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

}
