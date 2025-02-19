import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular104';
  testClick() {
    console.log('test EventBinding');
  }
  testNumberChange(value: number) {
    console.log('test NumberChange from app action bar', value);
  }
}
