import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SoftwareIdComponent } from './software-id/software-id.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    MainComponent,
    SoftwareIdComponent,
    NotFoundComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class PagesModule { }
