import { Component } from '@angular/core';
import { faLightbulb, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  faLightBulb = faLightbulb;
  faMagnifyingGlass = faMagnifyingGlass;
}
