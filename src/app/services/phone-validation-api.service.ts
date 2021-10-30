import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PhoneValidationApiService {
  url :string =environment.phoneValidationApi
  key : string =environment.access_key
  constructor(private http: HttpClient) { }

  getCountryList() {
    return this.http.get<any>(
      `${this.url}/countries`,
      {params: {access_key: this.key}});
  }
  verifyPhoneNum(number:string, countryCode: string){
    return this.http.get(`${this.url}/validate`,
    {params: {access_key: this.key, number, country_code: countryCode}});
  }


}
