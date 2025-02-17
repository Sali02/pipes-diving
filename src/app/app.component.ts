import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';
import { DatePipe, DecimalPipe } from '@angular/common';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [TemperaturePipe, DecimalPipe, DatePipe, SortPipe]
})
export class AppComponent {
  title = 'pipes-diving';
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  constructor() {
    this.historicTemperatures.sort((a, b) => a > b ? 1 : -1);
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // const newTemps = [...this.historicTemperatures];
    // newTemps[index] = 18;
    // this.historicTemperatures = newTemps; 
  }
}
