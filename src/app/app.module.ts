import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MyMaterialModule} from './material.module';
import { AppComponent } from './app.component';
import {BackendService,TransactionService} from './service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MyMaterialModule,HttpModule
  ],
  providers: [BackendService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
