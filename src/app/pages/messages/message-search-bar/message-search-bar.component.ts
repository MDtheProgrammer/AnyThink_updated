import { Component } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-search-bar',
  templateUrl: './message-search-bar.component.html',
  styleUrls: ['./message-search-bar.component.css']
})
export class MessageSearchBarComponent {
  faLightBulb = faLightbulb;
  faMagnifyingGlass = faMagnifyingGlass;
}
