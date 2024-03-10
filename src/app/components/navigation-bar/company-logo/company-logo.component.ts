import { Component } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.css']
})
export class CompanyLogoComponent {
  faLightbulb = faLightbulb;
}
