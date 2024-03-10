import { Component } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faComments, faEnvelope, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { CreateLine } from 'src/app/Shared/createLine';

@Component({
  selector: 'app-create-options-bar',
  templateUrl: './create-options-bar.component.html',
  styleUrls: ['./create-options-bar.component.css']
})
export class CreateOptionsBarComponent {

  editElements: CreateLine[] = [
    new CreateLine('/post', faSquarePlus, 'Post'),
    new CreateLine('/edit', faPenRuler, 'Edit'),
    new CreateLine('/chats', faComments, 'chats'),
    new CreateLine('/mail', faEnvelope, 'email')
  ]
}
