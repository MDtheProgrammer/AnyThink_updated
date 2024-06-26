import { Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { NavigationLine } from '../../Shared/navigation.model';
import {
  faHome,
  faMagnifyingGlass,
  faPeopleGroup,
  faBell,
  faEnvelope,
  faWarehouse,
  faBookmark,
  faMoneyBillTransfer,
  faUser,
  faEllipsis,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth..service';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent{
  constructor(private authService: AuthService, private router: Router){}
  navigations: NavigationLine[] = [
    new NavigationLine('Home', faHome, '/home'),
    new NavigationLine('Explore', faMagnifyingGlass, '/explore'),
    new NavigationLine('Communities', faPeopleGroup, '/communities'),
    new NavigationLine('Notifications', faBell, '/notifications'),
    new NavigationLine('Messages', faEnvelope, '/messages'),
    new NavigationLine('Your Garage', faWarehouse, '/garage'),
    new NavigationLine('Bookmarks', faBookmark, '/bookmarks'),
    new NavigationLine('Money', faMoneyBillTransfer, '/moneyTransfer'),
    new NavigationLine('Profile', faUser, '/profile'),
    new NavigationLine('More', faEllipsis, '/more')
  ];

  
  onLogout(){
    this.router.navigate(['/login']);
    this.authService.logout();
  }

  iconChange: IconProp = faAnglesLeft;
  changed: boolean = false;
  onShrink(){
    this.changed = !this.changed;
    if(this.changed){
      this.iconChange = faAnglesRight;
    }
    else{
      this.iconChange = faAnglesLeft;
    }
    console.log(this.changed);
  }
 
}
