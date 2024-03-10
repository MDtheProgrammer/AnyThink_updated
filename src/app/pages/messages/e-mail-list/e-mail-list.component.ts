import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-e-mail-list',
  templateUrl: './e-mail-list.component.html',
  styleUrls: ['./e-mail-list.component.css']
})
export class EMailListComponent {
  faUser = faUser;
}
