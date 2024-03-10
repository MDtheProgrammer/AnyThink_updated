import { Component } from '@angular/core';
import { faMagnifyingGlass, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explore-search-bar',
  templateUrl: './explore-search-bar.component.html',
  styleUrls: ['./explore-search-bar.component.css']
})
export class ExploreSearchBarComponent {
  faLightBulb = faLightbulb;
  faMagnifyingGlass = faMagnifyingGlass;
}
