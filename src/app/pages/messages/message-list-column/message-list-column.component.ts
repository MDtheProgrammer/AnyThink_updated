import { Component } from '@angular/core';
import { NavigationLine } from 'src/app/Shared/navigation.model';
import { faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-list-column',
  templateUrl: './message-list-column.component.html',
  styleUrls: ['./message-list-column.component.css']
})
export class MessageListColumnComponent {
  navigations: NavigationLine[] = [
      new NavigationLine('e-mails', faEnvelope, 'email'),
      new NavigationLine('Chats', faComments, 'chats')
  ];


}
