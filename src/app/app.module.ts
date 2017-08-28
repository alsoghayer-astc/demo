import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ngMaterialModule} from './material.module';
import { AppComponent } from './app.component';
import {BackendService,TransactionService,BackboneService,ModelService} from './service';
import {ALL_FORMS} from './form';
import {GoogleMapComponent} from './component';

@NgModule({
  declarations: [
    AppComponent,
    ALL_FORMS,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,ngMaterialModule,HttpModule,
    ReactiveFormsModule,BrowserAnimationsModule
  ],
  providers: [BackendService,TransactionService,BackboneService,ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
