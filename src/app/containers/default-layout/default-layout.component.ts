import {Component,OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;
  
  private user: firebase.User;
 
  constructor(public afAuth: AngularFireAuth,private router: Router){
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
    if (user) {
      this.currentUser = user;
      console.log('AUTHSTATE USER----', user.displayName)
    } else {
      console.log('AUTHSTATE USER EMPTY', user)
      this.currentUser = null;
      this.router.navigate(['/login']);
    }
  });
}

  ngOnInit(): void {
    
  }

  
  logout() {
    console.log("test function");
    this.afAuth.signOut();
  }

  isLoggedIn() {
      this.afAuth.authState.subscribe(user => {
        this.user = user;
      });
      var loggedIn = this.currentUser !== null;
      if(!loggedIn){
        this.authState.subscribe(user => {
          if (user) {
            this.currentUser = user;
            console.log('AUTHSTATE USER----', user.displayName)
          } else {
            console.log('AUTHSTATE USER EMPTY', user)
            this.currentUser = null;
            this.router.navigate(['/login']);
          }
        });
      }
  // returns user object
      console.log("is loggedIn: ",loggedIn);
      return loggedIn;
  } 

  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
