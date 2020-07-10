import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private auth: AuthService){}

  logout() {
    console.log("test function");
    this.auth.logout();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
