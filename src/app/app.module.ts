import {  HttpClientModule } from '@angular/common/http';
import { PhoneValidationApiService } from './services/phone-validation-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './country-list/country-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
     MatIconModule,
    MatInputModule,
    MatButtonModule,ReactiveFormsModule,MatSnackBarModule

  ],
  providers: [PhoneValidationApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
