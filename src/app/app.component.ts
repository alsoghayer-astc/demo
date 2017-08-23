import { Component } from '@angular/core';
import {TransactionService} from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INdicio';
  a:XMLSerializer;
  b:XMLDocument;
  constructor(private test:TransactionService){
    test.insert('urn:auth:def:objectType:222:Vehicle3','SomeName',[]);
  }
}