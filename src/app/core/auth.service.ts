import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState: Observable<firebase.User>
  public currentUser: firebase.User = null;
  
  public user: firebase.User;
 
  constructor(public afAuth: AngularFireAuth,private router: Router){
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
    if (user) {
      this.currentUser = user;
      console.log('AUTHSTATE USER----', user.displayName)
    } else {
      console.log('AUTHSTATE USER EMPTY', user)
      this.currentUser = null;
    }
  });
  }
  
  logout(){
    console.log("test");
    this.afAuth.signOut();
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
  
  isLoggedIn(){
    
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER----', user.displayName)
        return this.currentUser;
      } else {
        console.log('AUTHSTATE USER EMPTY', user)
        this.currentUser = null;
        return this.currentUser;
      }
    });

  }
}
