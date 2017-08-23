import { Component } from '@angular/core';
import {TestService} from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INdicio';
  a:XMLSerializer;
  b:XMLDocument;
  constructor(private test:TestService){
    test.runTest();
  }
}