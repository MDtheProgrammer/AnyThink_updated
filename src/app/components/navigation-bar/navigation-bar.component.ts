import { Component, OnDestroy, OnInit} from '@angular/core';
import { NavigationLine } from '../../Shared/navigation.model';
import {
  faAnglesLeft,
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
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth..service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent{
  constructor(private authService: AuthService, private router: Router){}
  navigations: NavigationLine[] = [
    new NavigationLine('Shrink', faAnglesLeft, '/shrink'),
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
}
