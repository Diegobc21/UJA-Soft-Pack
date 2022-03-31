import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SoftwareIdComponent } from './software-id/software-id.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    MainComponent,
    SoftwareIdComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class PagesModule { }
