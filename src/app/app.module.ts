import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { environment } from './environments/environment';

import { AppComponent } from './app.component';

import {FirebaseHelper} from './core/services/firebase-helper'
import {ConfiguratorService} from './core/services/configurator.service'

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import * as firebase from 'firebase/app';
import { LoginComponent } from './static/login/login.component';
import { RegisterComponent } from './static/register/register.component'
import { NotFoundComponent } from './static/not-found/not-found.component';
import { AboutComponent } from './static/about/about.component';
import { FaqComponent } from './static/faq/faq.component';
import { ContactsComponent } from './static/contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { MaterialPickerComponent } from './configurator/material-picker/material-picker.component';
import { PieceSelectorComponent } from './configurator/piece-selector/piece-selector.component';
import { HomeConfiguratorComponent } from './home-configurator/home-configurator.component';

if (!firebase.apps.length) {
    firebase.initializeApp(environment.firebase);
}

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports:      [ 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    MaterialModule],
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    RegisterComponent, 
    NotFoundComponent, 
    AboutComponent, 
    FaqComponent, 
    ContactsComponent, 
    HeaderComponent, 
    ConfiguratorComponent,
    HomeConfiguratorComponent,
    MaterialPickerComponent,
    PieceSelectorComponent],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseHelper, ConfiguratorService]
})
export class AppModule { }
