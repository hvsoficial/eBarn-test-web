import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TractorsListComponent } from './components/tractors-list/tractors-list.component';
import { TractorDetailsComponent } from './components/tractor-details/tractor-details.component';
import { AddTractorComponent } from './components/add-tarctor/add-tarctor.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { AddHomeComponent } from './components/add-home/add-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AddHomeComponent },
  { path: 'tractors', component: TractorsListComponent },
  { path: 'tractors/:id', component: TractorDetailsComponent },
  { path: 'add', component: AddTractorComponent },
  { path: 'file', component: UploadImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
