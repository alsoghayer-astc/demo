import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MyMaterialModule} from './material.module';
import { AppComponent } from './app.component';
import {TestService} from './service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MyMaterialModule,HttpModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
