import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MyMaterialModule} from './material.module';
import { AppComponent } from './app.component';
import {BackendService,TransactionService,BackboneService} from './service';
import {ALL_FORMS} from './form';

@NgModule({
  declarations: [
    AppComponent,
    ALL_FORMS
  ],
  imports: [
    BrowserModule,MyMaterialModule,HttpModule,
    ReactiveFormsModule,BrowserAnimationsModule
  ],
  providers: [BackendService,TransactionService,BackboneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
