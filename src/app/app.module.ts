import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTractorComponent } from './components/add-tarctor/add-tarctor.component';
import { TractorDetailsComponent } from './components/tractor-details/tractor-details.component';
import { TractorsListComponent } from './components/tractors-list/tractors-list.component';
import { AddHomeComponent } from './components/add-home/add-home.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddTractorComponent,
    TractorDetailsComponent,
    TractorsListComponent,
    AddHomeComponent,
    UploadImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
