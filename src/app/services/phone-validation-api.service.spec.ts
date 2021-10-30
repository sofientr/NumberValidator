import { PhoneValidationApiService } from './phone-validation-api.service';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';

describe('PhoneValidationService', () => {

  let service: PhoneValidationApiService;
  let httpMock: HttpTestingController;
  let countries:any;
  let phoneValidationRes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(PhoneValidationApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it ("getCountryList() should be a defined function", ()=> {
    expect ( service.getCountryList).toBeDefined()
  })
  it ("url should be truthy", ()=> {
   expect ( service.url).toBeTruthy()
 })
 it ("url should be truthy", ()=> {
  expect ( service.url).toBeTruthy()
  })
  it ("key should be truthy", ()=> {
    expect ( service.key).toBeTruthy()
    })
  
  it('should get the list of countries', () => {
    countries = {
      "AF": {
        "country_name": "Afghanistan",
        "dialling_code": "+93"
      },
      "AL": {
        "country_name": "Albania",
        "dialling_code": "+355"
      }
    };

    service.getCountryList().subscribe((res) => {
      expect(res).toBe(countries);
    });

    const url = `${environment.phoneValidationApi}/countries?access_key=${environment.access_key}`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toEqual('json');
    req.flush(countries);

  });

  it('should validate the phone number', () => {
    // preparing the mocked result
    const number = '2169935945';
    const countryCode = '';
    phoneValidationRes = {
      "valid": true,
      "number": 14158586273,
      "local_format": 4158586273,
      "international_format": "+14158586273",
      "country_prefix": "+1",
      "country_code": "US",
      "country_name": "United States of America",
      "location": "Novato",
      "carrier": "AT&T Mobility LLC",
      "line_type": "mobile"
    }

    service.verifyPhoneNum(number, countryCode).subscribe((res) => {
      expect(res).toBe(phoneValidationRes);
    });

    const url = `${environment.phoneValidationApi}/validate?access_key=${environment.access_key}&number=${number}&country_code=${countryCode}`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toEqual('json');
    req.flush(phoneValidationRes);

  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
