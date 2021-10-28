import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PhoneValidationApiService {
  url :string =environment.phoneValidationApi
  constructor(private http: HttpClient) { }

  getCountryList() {
    return this.http.get<any>(
      `${this.url}/countries`,
      {params: {access_key: environment.access_key}});
  }

}
