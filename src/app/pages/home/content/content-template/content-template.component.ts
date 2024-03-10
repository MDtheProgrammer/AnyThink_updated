import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faComment, faEllipsis, faIceCream, faRecycle, faShareNodes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.css']
})
export class ContentTemplateComponent {
  faIceCream = faIceCream;
  faEllipsis = faEllipsis;
  icons: IconProp[] = [
    faIceCream, faRecycle, faComment, faShareNodes, faEllipsis 
  ]
  
}
