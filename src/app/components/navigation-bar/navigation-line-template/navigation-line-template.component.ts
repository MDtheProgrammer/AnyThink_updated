import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-navigation-line-template',
  templateUrl: './navigation-line-template.component.html',
  styleUrls: ['./navigation-line-template.component.css'],
})
export class NavigationLineTemplateComponent implements OnInit{
  
  
  @Input() naviElement!: { toWhere: string, icon: IconProp, toUrl: string };
  constructor() {}
  ngOnInit() {
  }
}
