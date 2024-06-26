import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-create-bar-template',
  templateUrl: './create-bar-template.component.html',
  styleUrls: ['./create-bar-template.component.css']
})
export class CreateBarTemplateComponent {
  @Input() editElement!: {toOpt: string, icon: IconProp, name: string};

  constructor(){}
}
