import { Component } from '@angular/core';

export const HEROES =  [
  {name: 'Windstorm', country: 'A'},
  {name: 'Bombasto',  country: 'B'},
  {name: 'Magneto',   country: 'A'},
  {name: 'Tornado',   country: 'B'}
];

export const COUNTRIES = [
  {country : 'A'},
  {country : 'B'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes = HEROES;
  selectedCountry = "";
  countries = COUNTRIES;
}
